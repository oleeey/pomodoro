$(document).ready(function() {
    let breakTime = $("#breakDisplay").text();
    let workTime = $("#workDisplay").text();

    var x;
    let status = "work";

    function loop() {
        if (!x) {
            x = setInterval(function() {
                status == "work" ? time = workTime : time = breakTime;

                let seconds = time * 60;

                if (seconds > 0) {
                    seconds -= 1;
                    let minutes = Math.floor(seconds / 60);
                    console.log(minutes, seconds % 60);
                    $("#clockDisplay").text(`${minutes}:${seconds % 60}`);
                }
                else {
                    clearInterval(x);
                    time == workTime ? clock(breakTime, workTime, "break") : clock(breakTime, workTime, "work");
                }
            
            }, 1000)
        }
        else {
            clearInterval(x);
            x = null;
        }
    }

    $(".adjustBreak").click(function(event) {
        if (event.target.id == "minusBreak" && breakTime > 1) {
            breakTime = parseInt(breakTime) - 1;
        }
        if (event.target.id == "plusBreak") {
            breakTime = parseInt(breakTime) + 1;
        }
        $("#breakDisplay").text(breakTime);
    })

    $(".adjustWork").click(function(event) {
        if (event.target.id == "minusWork" && workTime > 1) {
            workTime = parseInt(workTime) - 1;
        }
        if (event.target.id == "plusWork") {
            workTime = parseInt(workTime) + 1;
        }
        $("#workDisplay").text(workTime);
        $("#clockDisplay").text(workTime + ":00");
    })

    $(".btn").click(function(event) {
        switch(event.target.value) {
            case "start": 
                loop();
        }
    })
});

