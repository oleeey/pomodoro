$(document).ready(function() {
    let breakTime = $("#breakDisplay").text();
    let workTime = $("#workDisplay").text();
    let active = false;

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
                clock(2, 1, "work");
        }
    })
});

function clock(breakTime, workTime, status, active = true) {
    status == "work" ? time = workTime : time = breakTime;
    let seconds = time * 60;
    console.log(active);

    const x = setInterval(function() {
        if (seconds > 0) {
            seconds -= 10;
            let minutes = Math.floor(seconds / 60);
            console.log(minutes, seconds % 60);
            $("#clockDisplay").text(`${minutes}:${seconds % 60}`);
        }
        else {
            clearInterval(x);
            time == workTime ? clock(breakTime, workTime, "break") : clock(breakTime, workTime, "work");
        }
    }, 1000)

    $(".btn").click(function(event) {
        switch(event.target.value) {
            case "start":
                clearInterval(x);
                active = false;
        }
    }) 
}