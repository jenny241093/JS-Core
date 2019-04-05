$(() => {
    // TODO
    async function getMonkeys() {
        let template = await $.get('monkeysTemplate.hbs');
        let compiledTemplate = Handlebars.compile(template);
        let renderedHtml = compiledTemplate({ monkeys });
        $(`body`).append();
    }

})