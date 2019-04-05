// function attachEvents() {
//     $('#btnLoadTowns').on('click', function() {
//         console.log('ook');
//         let towns = $('#towns').val().split(', ').map((t) => {
//             return { name: t };
//         });
//         console.log(towns);
//         let template = $(`#towns-template`).html();
//         let compiledTemplate = Handlebars.compile(template);
//         let renderedHtml = compiledTemplate({ towns });
//         $('#root').append(renderedHtml);
//     });
//  
// }
function attachEvents() {
    $('#btnLoadTowns').on('click', getTownInfo)

    function getTownInfo() {
        let towns = $('#towns').val().split(', ').reduce((acc, cur) => {
            console.log(cur);

        }, { 'towns': [] });
        console.log(towns);
        let template = $(`#towns-template`).html();
        let compiledTemplate = Handlebars.compile(template);
        let renderedHtml = compiledTemplate({ towns });
        $('#root').append(renderedHtml);

    }

    function renderTowns() {

    }
}
//Sofia, Varna, Burgas