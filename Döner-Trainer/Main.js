"use strict";
var DönerTrainer_Endabgabe;
(function (DönerTrainer_Endabgabe) {
    /*let container: HTMLDivElement;
    let storage: HTMLDivElement;
    let available: boolean = true;
    let staffAmount: number;
    let customerAomunt: number;
    let breakofStaffs: number;
    let customerPerMinute: number;
    let capacityMaterials: number;
    let orderList: HTMLDivElement;
    let request: Request[];
    let containerAmount: number;*/
    //let staffs: Staff[] = [];
    //let orders: Order[] = [];
    //let persons:Person[] = [];
    let formData;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let startGameButton = document.querySelector("#startGameButton");
        startGameButton.addEventListener("click", prepareGame);
        document.getElementById("canvas").hidden = true;
        document.getElementById("container").hidden = true;
    }
    function prepareGame(_event) {
        formData = new FormData(document.forms[0]);
        console.log(formData);
        let form = document.querySelector("form");
        let body = document.querySelector("body");
        body.removeChild(form);
        createGameScreen();
    }
    function createGameScreen() {
        document.getElementById("canvas").hidden = false;
        document.getElementById("container").hidden = false;
        DönerTrainer_Endabgabe.canvas = document.querySelector("canvas");
        DönerTrainer_Endabgabe.crc2 = DönerTrainer_Endabgabe.canvas.getContext("2d");
        console.log(DönerTrainer_Endabgabe.crc2);
        drawCounter(new DönerTrainer_Endabgabe.Vector(100, 475), "#D3d3d3");
        drawCuttingBoard(new DönerTrainer_Endabgabe.Vector(100, 175), "#D3d3d3");
        drawCustomer(new DönerTrainer_Endabgabe.Vector(400, 400));
    }
    function drawCustomer(_position) {
        //impatient Customer
        //body
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x - 200, _position.y + 330);
        DönerTrainer_Endabgabe.crc2.fillStyle = "#b0E0E6";
        DönerTrainer_Endabgabe.crc2.arc(85, 25, 35, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        //head
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
        DönerTrainer_Endabgabe.crc2.arc(85, -30, 25, -6, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        //eye
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.fillStyle = "black";
        DönerTrainer_Endabgabe.crc2.arc(73, -30, 4, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(93, -30, 4, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        //mouth
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.moveTo(71, -15);
        DönerTrainer_Endabgabe.crc2.lineTo(100, -16);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.lineWidth = 2;
        DönerTrainer_Endabgabe.crc2.strokeStyle = "black";
        DönerTrainer_Endabgabe.crc2.stroke();
        //arm
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
        DönerTrainer_Endabgabe.crc2.arc(63, 20, 7, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(105, 20, 7, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.fill();
        DönerTrainer_Endabgabe.crc2.closePath();
        //feet
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.fillStyle = "#BC8F8F";
        DönerTrainer_Endabgabe.crc2.arc(70, 60, 8, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(95, 60, 8, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.fill();
        DönerTrainer_Endabgabe.crc2.closePath();
        //hair
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.moveTo(70, -55);
        DönerTrainer_Endabgabe.crc2.lineTo(70, -40);
        DönerTrainer_Endabgabe.crc2.moveTo(75, -55);
        DönerTrainer_Endabgabe.crc2.lineTo(75, -40);
        DönerTrainer_Endabgabe.crc2.moveTo(80, -55);
        DönerTrainer_Endabgabe.crc2.lineTo(80, -40);
        DönerTrainer_Endabgabe.crc2.moveTo(85, -55);
        DönerTrainer_Endabgabe.crc2.lineTo(85, -40);
        DönerTrainer_Endabgabe.crc2.moveTo(90, -55);
        DönerTrainer_Endabgabe.crc2.lineTo(90, -40);
        DönerTrainer_Endabgabe.crc2.moveTo(95, -55);
        DönerTrainer_Endabgabe.crc2.lineTo(95, -40);
        DönerTrainer_Endabgabe.crc2.moveTo(100, -55);
        DönerTrainer_Endabgabe.crc2.lineTo(100, -40);
        DönerTrainer_Endabgabe.crc2.stroke();
        DönerTrainer_Endabgabe.crc2.restore();
        //happy Customer
        //body
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x + 100, _position.y - 400);
        DönerTrainer_Endabgabe.crc2.fillStyle = "#b0E0E6";
        DönerTrainer_Endabgabe.crc2.arc(85, 25, 35, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        //head
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
        DönerTrainer_Endabgabe.crc2.arc(85, -30, 25, -6, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        //eye
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.fillStyle = "black";
        DönerTrainer_Endabgabe.crc2.arc(73, -30, 4, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(93, -30, 4, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        //mouth
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.arc(83, -17, 10, 0, Math.PI, false);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.lineWidth = 2;
        DönerTrainer_Endabgabe.crc2.strokeStyle = "black";
        DönerTrainer_Endabgabe.crc2.stroke();
        //arm
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
        DönerTrainer_Endabgabe.crc2.arc(63, 20, 7, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(105, 20, 7, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        //feet
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.fillStyle = "#BC8F8F";
        DönerTrainer_Endabgabe.crc2.arc(70, 60, 8, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(95, 60, 8, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        //hair
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.moveTo(70, -55);
        DönerTrainer_Endabgabe.crc2.lineTo(70, -40);
        DönerTrainer_Endabgabe.crc2.moveTo(75, -55);
        DönerTrainer_Endabgabe.crc2.lineTo(75, -40);
        DönerTrainer_Endabgabe.crc2.moveTo(80, -55);
        DönerTrainer_Endabgabe.crc2.lineTo(80, -40);
        DönerTrainer_Endabgabe.crc2.moveTo(85, -55);
        DönerTrainer_Endabgabe.crc2.lineTo(85, -40);
        DönerTrainer_Endabgabe.crc2.moveTo(90, -55);
        DönerTrainer_Endabgabe.crc2.lineTo(90, -40);
        DönerTrainer_Endabgabe.crc2.moveTo(95, -55);
        DönerTrainer_Endabgabe.crc2.lineTo(95, -40);
        DönerTrainer_Endabgabe.crc2.moveTo(100, -55);
        DönerTrainer_Endabgabe.crc2.lineTo(100, -40);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.stroke();
        DönerTrainer_Endabgabe.crc2.restore();
        //mad Customer
        //body
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x - 650, _position.y - 400);
        DönerTrainer_Endabgabe.crc2.fillStyle = "#b0E0E6";
        DönerTrainer_Endabgabe.crc2.arc(85, 25, 35, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        //head
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
        DönerTrainer_Endabgabe.crc2.arc(85, -30, 25, -6, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        //eye
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.fillStyle = "black";
        DönerTrainer_Endabgabe.crc2.arc(73, -30, 4, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(93, -30, 4, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        //mouth
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.arc(83, -13, 10, 0, Math.PI, true);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.lineWidth = 2;
        DönerTrainer_Endabgabe.crc2.strokeStyle = "black";
        DönerTrainer_Endabgabe.crc2.stroke();
        //arm
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
        DönerTrainer_Endabgabe.crc2.arc(63, 20, 7, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(105, 20, 7, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        //feet
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.fillStyle = "#BC8F8F";
        DönerTrainer_Endabgabe.crc2.arc(70, 60, 8, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(95, 60, 8, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        //hair
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.moveTo(70, -55);
        DönerTrainer_Endabgabe.crc2.lineTo(70, -40);
        DönerTrainer_Endabgabe.crc2.moveTo(75, -55);
        DönerTrainer_Endabgabe.crc2.lineTo(75, -40);
        DönerTrainer_Endabgabe.crc2.moveTo(80, -55);
        DönerTrainer_Endabgabe.crc2.lineTo(80, -40);
        DönerTrainer_Endabgabe.crc2.moveTo(85, -55);
        DönerTrainer_Endabgabe.crc2.lineTo(85, -40);
        DönerTrainer_Endabgabe.crc2.moveTo(90, -55);
        DönerTrainer_Endabgabe.crc2.lineTo(90, -40);
        DönerTrainer_Endabgabe.crc2.moveTo(95, -55);
        DönerTrainer_Endabgabe.crc2.lineTo(95, -40);
        DönerTrainer_Endabgabe.crc2.moveTo(100, -55);
        DönerTrainer_Endabgabe.crc2.lineTo(100, -40);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.stroke();
    }
    function drawCounter(_position, _fillColor) {
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.fillStyle = _fillColor;
        DönerTrainer_Endabgabe.crc2.fillRect(0, 0, 850, 150);
        DönerTrainer_Endabgabe.crc2.restore();
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.fillStyle = "green";
        DönerTrainer_Endabgabe.crc2.fillRect(250, 50, 75, 75);
        DönerTrainer_Endabgabe.crc2.strokeRect(250, 50, 75, 75);
        DönerTrainer_Endabgabe.crc2.restore();
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.fillStyle = "purple";
        DönerTrainer_Endabgabe.crc2.fillRect(350, 50, 75, 75);
        DönerTrainer_Endabgabe.crc2.strokeRect(350, 50, 75, 75);
        DönerTrainer_Endabgabe.crc2.restore();
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.fillStyle = "#FFD39B";
        DönerTrainer_Endabgabe.crc2.fillRect(450, 50, 75, 75);
        DönerTrainer_Endabgabe.crc2.strokeRect(450, 50, 75, 75);
        DönerTrainer_Endabgabe.crc2.restore();
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.fillStyle = "yellow";
        DönerTrainer_Endabgabe.crc2.fillRect(550, 50, 75, 75);
        DönerTrainer_Endabgabe.crc2.strokeRect(550, 50, 75, 75);
        DönerTrainer_Endabgabe.crc2.restore();
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.fillStyle = "white";
        DönerTrainer_Endabgabe.crc2.fillRect(650, 50, 50, 75);
        DönerTrainer_Endabgabe.crc2.strokeRect(650, 50, 50, 75);
        DönerTrainer_Endabgabe.crc2.restore();
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.fillStyle = "red";
        DönerTrainer_Endabgabe.crc2.fillRect(720, 50, 50, 75);
        DönerTrainer_Endabgabe.crc2.strokeRect(720, 50, 50, 75);
        DönerTrainer_Endabgabe.crc2.restore();
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.fillStyle = "#F5F5DC";
        DönerTrainer_Endabgabe.crc2.fillRect(790, 50, 50, 75);
        DönerTrainer_Endabgabe.crc2.strokeRect(790, 50, 50, 75);
        DönerTrainer_Endabgabe.crc2.restore();
    }
    function drawCuttingBoard(_position, _fillColor) {
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.fillStyle = _fillColor;
        DönerTrainer_Endabgabe.crc2.fillRect(0, 0, 550, 150);
        DönerTrainer_Endabgabe.crc2.restore();
    }
})(DönerTrainer_Endabgabe || (DönerTrainer_Endabgabe = {}));
//# sourceMappingURL=Main.js.map