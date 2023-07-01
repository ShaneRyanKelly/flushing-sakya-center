import infos from '../data/info.json' assert { type: "json" };

document.addEventListener("DOMContentLoaded", main);

var language = "chinese";
var page = "welcome"

$("#chinese").on("click", function(e){
    $("#english").removeClass("btn-outline-success");
    $(this).addClass("btn-outline-success");
    language = "chinese";
    loadPage();
});

$("#english").on("click", function(e){
    $("#chinese").removeClass("btn-outline-success");
    $(this).addClass("btn-outline-success");
    language = "english";
    loadPage();
});

$(".nav-link").on("click", function(e){
    page = this.id;
    loadPage();
})

function main(){
    loadPage();
}

function loadPage(){
    //$("#title").html(infos[language]["main"]["title"]);
    //$("#subTitle").html(infos[language]["main"]["subTitle"]);
    $("#address").html(infos[language]["main"]["address"]);
    $(".navbar-brand").text(infos[language]["main"]["title"]);
    $("#welcome").text(infos[language]["main"]["welcome"]);
    $("#donate").text(infos[language]["main"]["donate"]);
    $("#lineage").text(infos[language]["main"]["lineage"])
    $("#pageTitle").html(infos[language]["page"][page]["title"]);
    $("#pageContent").html(infos[language]["page"][page]["content"]);
}