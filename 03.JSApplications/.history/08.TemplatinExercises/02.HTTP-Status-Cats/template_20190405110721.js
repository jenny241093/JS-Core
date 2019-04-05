$(() => {
    renderCatTemplate();

    // function renderCatTemplate() {
    //     let template = $("#cat-template").html();
    //     let compiledTemplate = Handlebars.compile(template);
    //     let renderedResult = compiledTemplate({ cats });

    //     let catsElement = $("#allCats");
    //     catsElement.html(renderedResult);

    //     $("button").on("click", function(e) {
    //         let target = $(e.target);
    //         console.log(target);

    //         let idDiv = target.next();
    //         console.log(idDiv);

    //         if (idDiv.attr("style")) {
    //             target.text("Hide status code");
    //             idDiv.removeAttr("style");
    //         } else {
    //             target.text("Show status code");
    //             idDiv.attr("style", "display: none");
    //         }
    //     });
    // }
    async function renderCatTemplate() {
        let template = await $.ajax({ url: "catsTemplate.html" });
        let compiledTemplate = Handlebars.compile(template);

        let context = {
            cats: window.cats
        };
        let renderedResult = compiledTemplate(context);
        let catsElement = $("#allCats");
        catsElement.html(renderedResult);

    }


});

function showInfo(id) {
    let div = $(`#${id}`);
    console.log(div);

    let btn = div.parent().next().find(`#btn-primary`);
    console.log(btn);

    div.toggle();


}