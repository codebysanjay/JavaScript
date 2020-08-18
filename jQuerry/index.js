$(document).ready(function () {
    $("h1").addClass("title");
    $("button").html("<em>Hey</em>");
    $("a").attr("href", "https://www.google.com");
    $("h1").click(function () {
        $("h1").css("color", "salmon");
    });
    $("button").click(function () {
        $("h1").fadeToggle().slideToggle();
    });
    
    $(document).keypress(function(event){
        $("h1").html(event.key)
    })
    $("h1").on("mouseover",function(){
        $("h1").css({"color":"red"})
    })
    

});
