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
        ctx.arc(0, 0, r * 40, Math.PI, 3/2 * Math.PI);
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
    }

}

window.onload = function() {
    repaintCanvas(3);
}