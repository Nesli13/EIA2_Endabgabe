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
        drawCounter(new DönerTrainer_Endabgabe.Vector(100, 475), "#A3A3A3");
        drawCuttingBoard(new DönerTrainer_Endabgabe.Vector(100, 175), "#A3A3A3");
        drawCustomer(new DönerTrainer_Endabgabe.Vector(300, 300));
    }
    function drawCustomer(_position) {
        //madCustomer
        //body
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(-200 + _position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.fillStyle = "red";
        DönerTrainer_Endabgabe.crc2.arc(85, 25, 35, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        //head
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.fillStyle = "#ffdead";
        DönerTrainer_Endabgabe.crc2.arc(85, -30, 25, -6, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        //eyes
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.fillStyle = "black";
        DönerTrainer_Endabgabe.crc2.arc(73, -30, 4, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(93, -30, 4, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        DönerTrainer_Endabgabe.crc2.restore();
        //mouth
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.moveTo(73, -15);
        DönerTrainer_Endabgabe.crc2.lineTo(100, -15);
        DönerTrainer_Endabgabe.crc2.stroke();
        //arms
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.fillStyle = "#ffdead";
        DönerTrainer_Endabgabe.crc2.arc(63, 20, 7, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(105, 20, 7, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        //feets
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.fillStyle = "blue";
        DönerTrainer_Endabgabe.crc2.arc(70, 60, 8, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(95, 60, 8, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        DönerTrainer_Endabgabe.crc2.restore();
        //hairs
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.moveTo(170, 260);
        DönerTrainer_Endabgabe.crc2.lineTo(170, 245);
        DönerTrainer_Endabgabe.crc2.moveTo(175, 260);
        DönerTrainer_Endabgabe.crc2.lineTo(175, 245);
        DönerTrainer_Endabgabe.crc2.moveTo(180, 260);
        DönerTrainer_Endabgabe.crc2.lineTo(180, 245);
        DönerTrainer_Endabgabe.crc2.moveTo(185, 260);
        DönerTrainer_Endabgabe.crc2.lineTo(185, 245);
        DönerTrainer_Endabgabe.crc2.moveTo(190, 260);
        DönerTrainer_Endabgabe.crc2.lineTo(190, 245);
        DönerTrainer_Endabgabe.crc2.moveTo(195, 260);
        DönerTrainer_Endabgabe.crc2.lineTo(195, 245);
        DönerTrainer_Endabgabe.crc2.moveTo(200, 260);
        DönerTrainer_Endabgabe.crc2.lineTo(200, 245);
        DönerTrainer_Endabgabe.crc2.stroke();
        DönerTrainer_Endabgabe.crc2.restore();
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