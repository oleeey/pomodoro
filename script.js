$(document).ready(function() {
    let breakTime = $("#breakDisplay").text();
    let workTime = $("#workDisplay").text();

    $(".adjustBreak").click(function(event) {
        if (event.target.id == "minusBreak" && breakTime > 1) {
            breakTime -= 1;
        }
        if (event.target.id == "plusBreak") {
            breakTime += 1;
        }
        $("#breakDisplay").text(breakTime);
    })

    $(".adjustWork").click(function(event) {
        if (event.target.id == "minusWork" && workTime > 1) {
            workTime -= 1;
        }
        if (event.target.id == "plusWork") {
            workTime += 1;
        }
        $("#workDisplay").text(workTime);
    })




});