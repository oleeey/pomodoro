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
                startClock(breakTime, workTime);
        }
    })
});

function startClock(breakTime, workTime) {
    let seconds = workTime * 60;
    let minutes = Math.floor(seconds / 60) - 1;

    const x = setInterval(function() {
        seconds -= 10;
        if (seconds % 60 == 0) {
            minutes--;
        }
        
        
        console.log(minutes, seconds % 60);
        $("#clockDisplay").text(`${minutes}:${seconds % 60}`);
    }, 1000)
}