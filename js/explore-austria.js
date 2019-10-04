

var explore = (function () {

    var initI18next = function () {
        i18next.init({
            lng: 'de',
            fallbackLng: 'de',
            whitelist: ['ed', 'en'],
            resources: {
                de: { translation: { 'main.header': 'Leiwand' } }, // 2
                en: { translation: { 'main.header': 'Leiwand' } }, // 3
            },
        }, function (err, t) {
            //$("#main.header").innerHTML = i18next.t("main.header");
            console.log(err);

            document.getElementById('#xxxx').innerHTML = i18next.t("main.header");
        });
    }

    var translate = function () {
        //    $("#explore-austria-body").localize();
        console.log("translagte:", $("#xxxx"));
    }

    return {
        initI18next: initI18next,
        translate: translate
    }
})();

$(function () {
    console.log("Dokument wird geladen");
    explore.initI18next();
    explore.translate();
});