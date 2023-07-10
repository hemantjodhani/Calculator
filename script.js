$(document).ready(function(){

    $("td").click(function(){
        var value = $(this).text()
        $(".result-screen").val($(".result-screen").val() + value);
    });

    $(".clear").click(function(){
        $(".result-screen").val("");
    });

    $(".calculate-now").click(function(){
        var screen_value = $(".result-screen").val();
        var result = eval(screen_value);
        $(".result-screen").val(result);
    });
});