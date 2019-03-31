function attachEvents() {
    let baseUrl = `https://baas.kinvey.com/`;

    const kinveyUsername = 'guest';
    const kinveyPassword = 'pass';
    const base64auth = btoa(`${kinveyUsername}:${kinveyPassword}`);
    let appData = 'appdata/kid_BJ_Ke8hZg';
    const headers = {
        Authorization: 'Basic ' + base64auth
    };
    $(`#getVenues`).on(`click`, getVenues);

    async function getVenues() {
        let date = $(`#venueDate`).val();
        let data = await $.ajax({
            type: 'POST',
            url: `https://baas.kinvey.com/rpc/kid_BJ_Ke8hZg/custom/calendar?query=${date}`,
            headers,
            contentType: 'application/json'
        });

        for (const _id of data) {
            let venue = await $.ajax({
                type: 'GET',
                url: `https://baas.kinvey.com/appdata/kid_BJ_Ke8hZg/venues/${_id}`,
                headers,
                contentType: 'application/json',
            });
            console.log(venue);

            $(`#venue-info`).append($(`<div class="venue" id="${venue._id}">
                <span class="venue-name"><input class="info" type="button" value="More info">${venue.name}</span>
                <div class="venue-details" style="display: none;">
                  <table>
                    <tr><th>Ticket Price</th><th>Quantity</th><th></th></tr>
                    <tr>
                      <td class="venue-price">${venue.price} lv</td>
                      <td><select class="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select></td>
                      <td><input class="purchase" type="button" value="Purchase"></td>
                    </tr>
                  </table>
                  <span class="head">Venue description:</span>
                  <p class="description">${venue.description}</p>
                  <p class="description">Starting time: ${venue.startingHour}</p>
                </div>
              </div>
              `));

        }
        $(`.info`).on(`click`, showInfo);

        function showInfo(e) {
            let venueName = $(e.target).parent().closest('span').text();



            let price = +$(e.target).parent().closest('div').find('.venue-price').text().split(' ')[0];

            $(`.venue-name`).css("display", "none");
            let div = $(e.target).parent().closest('div').find('div.venue-details').show();
            console.log(div);
            let _id = div.parent().attr(`id`);


            $(`.purchase`).on('click', purchase);

            function purchase(e) {
                let qty = $(e.target).parent().closest('div').find('.quantity').find(":selected").text();
                console.log(qty);
                $(`#venue-info`).append(`<span class="head">Confirm purchase</span>
                <div class="purchase-info">
                  <span>${venueName}</span>
                  <span>${qty} x ${price}</span>
                  <span>Total: ${qty * price} lv</span>
                  <input type="button" value="Confirm">
                </div>
                `);
                $('input[type=button][value=Confirm]').on(`click`, printTicket);

                async function printTicket() {


                    let ticket = await $.ajax({
                        type: 'POST',
                        url: baseUrl + `rpc/kid_BJ_Ke8hZg/custom/purchase?venue=${_id}&qty=${qty}`,
                        headers,
                        contentType: 'application/json'
                    });
                    $('#venue-info').empty();
                    $('#venue-info').append($(`<p>You may print this page as your ticket</p>`));
                    $('#venue-info').append(ticket.html);
                }
            }
        }



    }
}