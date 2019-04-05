$(async() => {
    try {
        const contactListHtml = await $.get(`./contact-list.hbs`);
        const contactInfoHtml = await $.get(`./contact-info.hbs`);
        Handlebars.registerPartial(`contactInfo`, contactInfoHtml);
        const template = Handlebars.compile(contactListHtml);
    } catch (error) {
        console.log(error);

    }

})