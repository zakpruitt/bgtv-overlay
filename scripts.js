$( document ).ready(function() {
    $("#inputName1").val($("#name1").text());
    $("#inputExtraLeft").val($("#extra-left").text());
    $("#inputExtraRight").val($("#extra-right").text());
    $("#inputName2").val($("#name2").text());
});

$("#p1Plus").click(function () {
    var currentScore = parseInt($("#score1").text());
    var newScore = currentScore + 1;
    $("#score1").text(newScore);
});

$("#p1Minus").click(function () {
    var currentScore = parseInt($("#score1").text());
    var newScore = currentScore - 1;
    $("#score1").text(newScore);
});

$("#p2Plus").click(function () {
    var currentScore = parseInt($("#score2").text());
    var newScore = currentScore + 1;
    $("#score2").text(newScore);
});

$("#p2Minus").click(function () {
    var currentScore = parseInt($("#score2").text());
    var newScore = currentScore - 1;
    $("#score2").text(newScore);
});

$("#changeName1").click(function () {
    var newName = $("#inputName1").val();
    $("#name1").text(newName);
    $("#p1Plus").text(newName + " +");
    $("#p1Minus").text(newName + " -");
});

$("#changeExtraLeft").click(function () {
    var newExtra = $("#inputExtraLeft").val();
    $("#extra-left").text(newExtra);
});

$("#changeExtraRight").click(function () {
    var newExtra = $("#inputExtraRight").val();
    $("#extra-right").text(newExtra);
});

$("#changeName2").click(function () {
    var newName = $("#inputName2").val();
    $("#name2").text(newName);
    $("#p2Plus").text(newName + " +");
    $("#p2Minus").text(newName + " -");
});

$("#resetScore").click(function () {
    $("#score1").text("0");
    $("#score2").text("0");
});