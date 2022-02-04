"use strict";
var DönerTrainer_Endabgabe;
(function (DönerTrainer_Endabgabe) {
    //let container: HTMLDivElement;
    //let storage: HTMLDivElement;
    //let available: boolean = true;
    let staffAmount;
    let customerAomunt;
    let breakofStaff;
    let customerPerMinute;
    let capacityMaterial;
    // let orderList: HTMLDivElement;
    //let request: Request[];
    let capacityContainer;
    //let staffs: Staff[] = [];
    //let orders: Order[] = [];
    //let persons:Person[] = [];
    let ingredients = [];
    let imgData;
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
        staffAmount = Number(formData.get("quantityStaff"));
        customerAomunt = Number(formData.get("quantityCustomer"));
        breakofStaff = Number(formData.get("restPeriodOfStaff"));
        customerPerMinute = Number(formData.get("customerPerMin"));
        capacityMaterial = Number(formData.get("capacityOfMaterials"));
        capacityContainer = Number(formData.get("capacityOfContainers"));
        console.log("staffAmount" + staffAmount, "customerAmount" + customerAomunt, "brekofStaff" + breakofStaff, "customerperminute" + customerPerMinute + "capacitymaterial" + capacityMaterial + "capacitycontainer" + capacityContainer);
        console.log(breakofStaff);
        createGameScreen();
        imgData = DönerTrainer_Endabgabe.crc2.getImageData(0, 0, DönerTrainer_Endabgabe.crc2.canvas.width, DönerTrainer_Endabgabe.crc2.canvas.height);
    }
    function createGameScreen() {
        document.getElementById("canvas").hidden = false;
        document.getElementById("container").hidden = false;
        DönerTrainer_Endabgabe.canvas = document.querySelector("canvas");
        DönerTrainer_Endabgabe.crc2 = DönerTrainer_Endabgabe.canvas.getContext("2d");
        console.log(DönerTrainer_Endabgabe.crc2);
        drawCounter(new DönerTrainer_Endabgabe.Vector(100, 475), "#D3d3d3");
        drawCuttingBoard(new DönerTrainer_Endabgabe.Vector(100, 175), "#D3d3d3");
        drawSalad();
        window.setInterval(update, 20);
    }
    function update() {
        DönerTrainer_Endabgabe.crc2.fillRect(0, 0, DönerTrainer_Endabgabe.crc2.canvas.width, DönerTrainer_Endabgabe.crc2.canvas.height);
        DönerTrainer_Endabgabe.crc2.putImageData(imgData, 0, 0);
    }
    function drawSalad() {
        let salad = new DönerTrainer_Endabgabe.Salad(new DönerTrainer_Endabgabe.Vector(100, 475));
        ingredients.push(salad);
        console.log(ingredients);
        for (let ingredient of ingredients) {
            ingredient.draw();
        }
    }
    //Background
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
        //knife
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
})(DönerTrainer_Endabgabe || (DönerTrainer_Endabgabe = {}));
//# sourceMappingURL=Main.js.map