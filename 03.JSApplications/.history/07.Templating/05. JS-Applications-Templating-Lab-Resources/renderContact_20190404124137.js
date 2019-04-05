$(async() => {
    try {
        const contactListHtml = await $.get(`./contact-list.hbs`);
        const contactInfoHtml = await $.get(`./contact-info.hbs`);
    } catch (error) {

    }

})