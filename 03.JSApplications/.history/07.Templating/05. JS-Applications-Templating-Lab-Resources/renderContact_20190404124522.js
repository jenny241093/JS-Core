function showDetails(id) {

}

$(async() => {
    try {
        const contactListHtml = await $.get(`./contact-list.hbs`);
        const contactInfoHtml = await $.get(`./contact-info.hbs`);
        Handlebars.registerPartial(`contactInfo`, contactInfoHtml);
        const template = Handlebars.compile(contactListHtml);

        const renderedHtml = template(contacts);
    } catch (error) {
        console.log(error);

    }

})