function showDetails(id) {
    $('#${id}').toggle();
}

$(async() => {
    try {
        const contactListHtml = await $.get(`./contact-list.hbs`);
        const contactInfoHtml = await $.get(`./contact-info.hbs`);
        Handlebars.registerPartial(`contactInfo`, contactInfoHtml);
        const template = Handlebars.compile(contactListHtml);

        const renderedHtml = template({ contacts });
        $('body').append(renderedHtml);
    } catch (error) {
        console.log(error);

    }

})