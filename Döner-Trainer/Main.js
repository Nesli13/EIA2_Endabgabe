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
        drawSalad(new DönerTrainer_Endabgabe.Vector(100, 475));
        drawSalad(new DönerTrainer_Endabgabe.Vector(-78, 100));
        drawRedCabbage(new DönerTrainer_Endabgabe.Vector(100, 235));
        drawRedCabbage(new DönerTrainer_Endabgabe.Vector(-45, 100));
        drawOnion(new DönerTrainer_Endabgabe.Vector(150, 235));
        drawOnion(new DönerTrainer_Endabgabe.Vector(-10, 100));
        drawCorn(new DönerTrainer_Endabgabe.Vector(205, 188));
        drawCorn(new DönerTrainer_Endabgabe.Vector(-70, -45));
        drawTomato(new DönerTrainer_Endabgabe.Vector(-35, -43));
        drawTomato(new DönerTrainer_Endabgabe.Vector(155, 95));
        //drawImpatientCustomer(new Vector(100, -50));
        //drawHappyCustomer(new Vector(100, 400));
        //drawMadCustomer(new Vector(800, 400));
    }
    function drawCounter(_position, _fillColor) {
        //Counter
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.fillStyle = _fillColor;
        DönerTrainer_Endabgabe.crc2.fillRect(0, 0, 850, 150);
        DönerTrainer_Endabgabe.crc2.restore();
        //salad Counter
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.strokeStyle = "green";
        DönerTrainer_Endabgabe.crc2.strokeRect(250, 50, 75, 75);
        DönerTrainer_Endabgabe.crc2.restore();
        //red cabbage Counter
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.strokeStyle = "purple";
        DönerTrainer_Endabgabe.crc2.strokeRect(350, 50, 75, 75);
        DönerTrainer_Endabgabe.crc2.restore();
        //onion Counter
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.strokeStyle = "#FFD39B";
        DönerTrainer_Endabgabe.crc2.strokeRect(450, 50, 75, 75);
        DönerTrainer_Endabgabe.crc2.restore();
        //corn Counter
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.strokeStyle = "yellow";
        DönerTrainer_Endabgabe.crc2.strokeRect(550, 50, 75, 75);
        DönerTrainer_Endabgabe.crc2.restore();
        //tomato Counter
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.strokeStyle = "red";
        DönerTrainer_Endabgabe.crc2.strokeRect(650, 50, 75, 75);
        DönerTrainer_Endabgabe.crc2.restore();
        //garlic sauce Counter
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.fillStyle = "#F5F5DC";
        DönerTrainer_Endabgabe.crc2.fillRect(750, 50, 35, 75);
        DönerTrainer_Endabgabe.crc2.restore();
        //hot sauce Counter
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.fillStyle = "#8B0000";
        DönerTrainer_Endabgabe.crc2.fillRect(790, 50, 35, 75);
        DönerTrainer_Endabgabe.crc2.restore();
    }
    function drawCuttingBoard(_position, _fillColor) {
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.fillStyle = _fillColor;
        DönerTrainer_Endabgabe.crc2.fillRect(0, 0, 350, 150);
        DönerTrainer_Endabgabe.crc2.restore();
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.fillStyle = "#CD853F";
        DönerTrainer_Endabgabe.crc2.fillRect(10, 10, 250, 120);
        DönerTrainer_Endabgabe.crc2.restore();
        DönerTrainer_Endabgabe.crc2.save();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.arc(230, 20, 80, 0, .25 * Math.PI, false);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.lineWidth = 5;
        DönerTrainer_Endabgabe.crc2.fillStyle = "black";
        DönerTrainer_Endabgabe.crc2.fill();
        DönerTrainer_Endabgabe.crc2.restore();
    }
    function drawSalad(_position) {
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.fillStyle = "green";
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 165, _position.y - 370, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 173, _position.y - 380, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 175, _position.y - 380, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 185, _position.y - 370, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 188, _position.y - 375, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 190, _position.y - 370, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 175, _position.y - 400, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 180, _position.y - 400, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 193, _position.y - 400, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 195, _position.y - 400, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 199, _position.y - 390, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        DönerTrainer_Endabgabe.crc2.restore();
        DönerTrainer_Endabgabe.crc2.save();
    }
    function drawRedCabbage(_position) {
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.fillStyle = "purple";
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 165, _position.y - 370, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 173, _position.y - 380, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 175, _position.y - 380, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 185, _position.y - 370, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 188, _position.y - 375, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 190, _position.y - 370, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 175, _position.y - 400, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 180, _position.y - 400, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 193, _position.y - 400, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 195, _position.y - 400, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 199, _position.y - 390, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        DönerTrainer_Endabgabe.crc2.restore();
        DönerTrainer_Endabgabe.crc2.save();
    }
    function drawOnion(_position) {
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.fillStyle = "#FFD39B";
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 165, _position.y - 370, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 173, _position.y - 380, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 175, _position.y - 380, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 185, _position.y - 370, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 188, _position.y - 375, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 190, _position.y - 370, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 175, _position.y - 400, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 180, _position.y - 400, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 193, _position.y - 400, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 195, _position.y - 400, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 199, _position.y - 390, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        DönerTrainer_Endabgabe.crc2.restore();
    }
    function drawCorn(_position) {
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.fillStyle = "yellow";
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 165, _position.y - 370, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 173, _position.y - 380, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 175, _position.y - 380, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 185, _position.y - 370, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 188, _position.y - 375, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 190, _position.y - 370, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 175, _position.y - 400, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 180, _position.y - 400, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 193, _position.y - 400, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 195, _position.y - 400, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 199, _position.y - 390, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        DönerTrainer_Endabgabe.crc2.restore();
        DönerTrainer_Endabgabe.crc2.save();
    }
    function drawTomato(_position) {
        DönerTrainer_Endabgabe.crc2.beginPath();
        DönerTrainer_Endabgabe.crc2.translate(_position.x, _position.y);
        DönerTrainer_Endabgabe.crc2.fillStyle = "red";
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 165, _position.y - 370, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 173, _position.y - 380, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 175, _position.y - 380, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 185, _position.y - 370, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 188, _position.y - 375, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 190, _position.y - 370, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 175, _position.y - 400, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 180, _position.y - 400, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 193, _position.y - 400, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 195, _position.y - 400, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.arc(_position.x + 199, _position.y - 390, 15, 0, 2 * Math.PI);
        DönerTrainer_Endabgabe.crc2.closePath();
        DönerTrainer_Endabgabe.crc2.fill();
        DönerTrainer_Endabgabe.crc2.restore();
        DönerTrainer_Endabgabe.crc2.save();
    }
})(DönerTrainer_Endabgabe || (DönerTrainer_Endabgabe = {}));
//# sourceMappingURL=Main.js.map