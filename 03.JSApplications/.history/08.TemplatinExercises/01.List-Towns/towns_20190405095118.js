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
// function attachEvents() {
//     $('#btnLoadTowns').on('click', getTownInfo)

//     function getTownInfo() {
//         let townsData = $('#towns').val()
//             .split(', ')
//             .reduce((acc, cur) => {
//                 acc.towns.push({ 'town': cur });
//                 return acc;
//             }, { 'towns': [] });

//         renderTowns(townsData);

//     }

//     async function renderTowns(towns) {
//         let source = await $.get('template.hbs');
//         let template = Handlebars.compile(source);
//         $('#root').html(template(towns));
//     }
// }
function attachEvents() {
    $('#btnLoadTowns').on('click', getTowns)

    function getTowns() {
        let towns = $('#towns').val()
            .split(', ');
        let context = {
            towns: towns
        }

        let template = $(`#towns-template`).html();
        let compiledTemplate = Handlebars.compile(template);
        $('#root').html(compiledTemplate(towns));
    }

}
//Sofia, Varna, Burgas