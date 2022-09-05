$(document).ready(function(){
    $("nav ul li a").on("click",function(){
        $(this).addClass("active")
        .parent().siblings().find("a")
        .removeClass("active") ;
        
    })
})