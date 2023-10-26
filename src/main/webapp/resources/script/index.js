let dots = new Map();

window.onload = function () {
    for (let row of document.querySelectorAll(".table-data-row")) {
        row = row.innerHTML.replaceAll(" ", "").replaceAll("<td>", "").replaceAll("</td>", "|").split("|");
        row.splice(row.length - 1, 1);
        if (dots.get(row[2]) === undefined) {
            dots.set(row[2], [
                {
                    x: row[0],
                    y: row[1],
                    isHit: row[4]
                }
            ]);
        } else {
            dots.get(row[2])[dots.get(row[2]).length] = {
                x: row[0],
                y: row[1],
                isHit: row[4]
            };
        }
    }
    repaintCanvas("3.0")
}

function getDotsList(r) {
    for (let key of dots.keys()) {
        if (key.includes(r))
            return dots.get(key);
    }
    return undefined;
}


function repaintCanvas(r) {
    const canvas = document.getElementById("field-canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, 415, 415);
        ctx.translate(415 / 2 + 1, 415 / 2 + 1);
        ctx.font = "24px Roboto";
        ctx.textAlign = "center";

        ctx.fillStyle = "#247FFF";

        ctx.beginPath();
        ctx.arc(0, 0, r * 40, Math.PI, 3 / 2 * Math.PI);
        ctx.lineTo(0, 0);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(-40 * r, 0);
        ctx.lineTo(0, 40 * r);
        ctx.lineTo(0, 0);
        ctx.fill();

        ctx.fillRect(0, 0, 40 * r, 40 * r);

        ctx.strokeText("0", -10, 20);

        ctx.beginPath();
        ctx.moveTo(0, -415 / 2 + 1);
        ctx.lineTo(0, 415 / 2 + 1);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-415 / 2 - 1, 0);
        ctx.lineTo(415 / 2 + 1, 0);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(40, 10);
        ctx.lineTo(40, -10);
        ctx.stroke();
        ctx.strokeText("1", 40, -15);

        ctx.beginPath();
        ctx.moveTo(80, 10);
        ctx.lineTo(80, -10);
        ctx.stroke();
        ctx.strokeText("2", 80, -15);

        ctx.beginPath();
        ctx.moveTo(120, 10);
        ctx.lineTo(120, -10);
        ctx.stroke();
        ctx.strokeText("3", 120, -15);

        ctx.beginPath();
        ctx.moveTo(160, 10);
        ctx.lineTo(160, -10);
        ctx.stroke();
        ctx.strokeText("4", 160, -15);

        ctx.beginPath();
        ctx.moveTo(200, 10);
        ctx.lineTo(200, -10);
        ctx.stroke();
        ctx.strokeText("5", 200, -15);

        ctx.beginPath();
        ctx.moveTo(-10, -40);
        ctx.lineTo(10, -40);
        ctx.stroke();
        ctx.strokeText("1", 15, -40);

        ctx.beginPath();
        ctx.moveTo(-10, -80);
        ctx.lineTo(10, -80);
        ctx.stroke();
        ctx.strokeText("2", 15, -80);

        ctx.beginPath();
        ctx.moveTo(-10, -120);
        ctx.lineTo(10, -120);
        ctx.stroke();
        ctx.strokeText("3", 15, -120);

        ctx.beginPath();
        ctx.moveTo(-10, -160);
        ctx.lineTo(10, -160);
        ctx.stroke();
        ctx.strokeText("4", 15, -160);

        ctx.beginPath();
        ctx.moveTo(-10, -200);
        ctx.lineTo(10, -200);
        ctx.stroke();
        ctx.strokeText("5", 15, -200);

        ctx.beginPath();
        ctx.moveTo(-40, -10);
        ctx.lineTo(-40, 10);
        ctx.stroke();
        ctx.strokeText("-1", -40, -15);

        ctx.beginPath();
        ctx.moveTo(-80, -10);
        ctx.lineTo(-80, 10);
        ctx.stroke();
        ctx.strokeText("-2", -80, -15);

        ctx.beginPath();
        ctx.moveTo(-120, -10);
        ctx.lineTo(-120, 10);
        ctx.stroke();
        ctx.strokeText("-3", -120, -15);

        ctx.beginPath();
        ctx.moveTo(-160, -10);
        ctx.lineTo(-160, 10);
        ctx.stroke();
        ctx.strokeText("-4", -160, -15);

        ctx.beginPath();
        ctx.moveTo(-200, -10);
        ctx.lineTo(-200, 10);
        ctx.stroke();
        ctx.strokeText("-5", -200, -15);

        ctx.beginPath();
        ctx.moveTo(-10, 40);
        ctx.lineTo(10, 40);
        ctx.stroke();
        ctx.strokeText("-1", 15, 40);

        ctx.beginPath();
        ctx.moveTo(-10, 80);
        ctx.lineTo(10, 80);
        ctx.stroke();
        ctx.strokeText("-2", 15, 80);

        ctx.beginPath();
        ctx.moveTo(-10, 120);
        ctx.lineTo(10, 120);
        ctx.stroke();
        ctx.strokeText("-3", 15, 120);

        ctx.beginPath();
        ctx.moveTo(-10, 160);
        ctx.lineTo(10, 160);
        ctx.stroke();
        ctx.strokeText("-4", 15, 160);

        ctx.beginPath();
        ctx.moveTo(-10, 200);
        ctx.lineTo(10, 200);
        ctx.stroke();
        ctx.strokeText("-5", 15, 200);

        if (getDotsList(r) !== undefined) {
            for (let dot of getDotsList(r)) {
                if (dot.isHit.includes("true"))
                    ctx.fillStyle = "purple";
                else
                    ctx.fillStyle = "red";
                ctx.beginPath();
                ctx.arc(dot.x * 40, -dot.y * 40, 5, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        ctx.translate(-(415 / 2 + 1), -(415 / 2 + 1));
    }

}

document.getElementById("field-canvas").onclick = function (event) {
    let x = (event.pageX - document.body.offsetWidth / 2);
    let y = (160 + 415 / 2 + 1 - event.pageY);

    // calculate x
    x /= 40;
    x = Math.round(x);

    if (!(x >= -4 && x <= 4)) {
        alert("Unable to calculate x-value");
        return;
    }

    // calculate y
    y /= 40;

    if (!(y > -3 && y < 5)) {
        alert("Unable to calculate y-value");
        return;
    }


    document.querySelector("select[name='j_idt7:j_idt9']").value = x;
    document.querySelector("input[name='j_idt7:j_idt20']").value = y;
    document.querySelector("input[name='j_idt7:j_idt24']").click();
}
