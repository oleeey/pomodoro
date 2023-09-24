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

    $(".btn").click(function(event) {
        switch(event.target.value) {
            case "start":
                startClock(breakTime, 1);
        }
    })
});

function startClock(breakTime, workTime) {
    let seconds = workTime * 60; 

    const x = setInterval(function() {
        if (seconds > 0) {
            seconds -= 10;
            let minutes = Math.floor(seconds / 60);
            console.log(minutes, seconds % 60);
            $("#clockDisplay").text(`${minutes}:${seconds % 60}`);
        }
        else {
            return;
        }
    }, 1000)
}