"use strict";
var DönerTrainer_Endabgabe;
(function (DönerTrainer_Endabgabe) {
    //let container: HTMLDivElement;
    //let storage: HTMLDivElement;
    //let available: boolean = true;
    let staffAmount;
    let customerAomunt;
    let breakofStaff;
    let capacityMaterial;
    // let orderList: HTMLDivElement;
    //let request: Request[];
    let capacityContainer;
    let staffs = [];
    let customers = [];
    //let orders: Order[] = [];
    //let persons:Person[] = [];
    let ingredients = [];
    let formData;
    let basis = ["Döner", "Lahmacun", "Yufka"];
    let topping = ["onion", "salad", "red cabbage", "corn", "tomato"];
    let sauce = ["sauce", "hot-sauce"];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let startGameButton = document.querySelector("#startGameButton");
        startGameButton.addEventListener("click", prepareGame);
        document.getElementById("canvas").hidden = true;
        document.getElementById("container").hidden = true;
        document.getElementById("doenerButton").hidden = true;
        document.getElementById("yufkaButton").hidden = true;
        document.getElementById("lahmacunButton").hidden = true;
        document.getElementById("saladButton").hidden = true;
        document.getElementById("redCabbageButton").hidden = true;
        document.getElementById("onionButton").hidden = true;
        document.getElementById("tomatoButton").hidden = true;
        document.getElementById("cornButton").hidden = true;
        document.getElementById("sauceButton").hidden = true;
        document.getElementById("sauceButton2").hidden = true;
        document.getElementById("happiness").hidden = true;
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
        capacityMaterial = Number(formData.get("capacityOfMaterials"));
        capacityContainer = Number(formData.get("capacityOfContainers"));
        console.log("staffAmount" + staffAmount, "customerAmount" + customerAomunt, "brekofStaff" + breakofStaff + "capacitymaterial" + capacityMaterial + "capacitycontainer" + capacityContainer);
        console.log(breakofStaff);
        createGameScreen();
    }
    function createGameScreen() {
        document.getElementById("canvas").hidden = false;
        document.getElementById("container").hidden = false;
        document.getElementById("doenerButton").hidden = false;
        document.getElementById("yufkaButton").hidden = false;
        document.getElementById("lahmacunButton").hidden = false;
        document.getElementById("saladButton").hidden = false;
        document.getElementById("redCabbageButton").hidden = false;
        document.getElementById("onionButton").hidden = false;
        document.getElementById("tomatoButton").hidden = false;
        document.getElementById("cornButton").hidden = false;
        document.getElementById("sauceButton").hidden = false;
        document.getElementById("sauceButton2").hidden = false;
        document.getElementById("happiness").hidden = false;
        DönerTrainer_Endabgabe.canvas = document.querySelector("canvas");
        DönerTrainer_Endabgabe.crc2 = DönerTrainer_Endabgabe.canvas.getContext("2d");
        console.log(DönerTrainer_Endabgabe.crc2);
        //document.querySelector("#saladButton").addEventListener("click", showCapacity);
        drawCounter(new DönerTrainer_Endabgabe.Vector(100, 475), "#D3d3d3");
        drawCuttingBoard(new DönerTrainer_Endabgabe.Vector(100, 175), "#D3d3d3");
        drawSalad();
        drawRedCabbage();
        drawOnion();
        drawCorn();
        drawTomato();
        drawDoenerKebap();
        drawLahmacun();
        drawYufka();
        showCapacity();
        showStaff();
        showCustomer();
        showOrder();
        window.setInterval(update, 20);
    }
    function update() {
        //console.log("");
    }
    function showCapacity() {
        let storage = document.getElementById("storage");
        storage.innerHTML = "Storage" + "<br>" + "<br>" + capacityMaterial + " kg of meat " + "<br>" + capacityMaterial + " kg of onion " + "<br>" + capacityMaterial + " kg of corn " + "<br>" + capacityMaterial + " kg of tomato " + "<br>" + capacityMaterial + " kg of salad" + "<br>" + capacityMaterial + " kg of red cabbage";
        let containerStorage = document.getElementById("container-storage");
        containerStorage.innerHTML = "Container-Storage" + "<br>" + " This is what you have left:" + "<br>" + capacityContainer + " g of meat " + "<br>" + capacityContainer + " g of onion " + "<br>" + capacityContainer + " g of corn " + "<br>" + capacityContainer + " g of tomato " + "<br>" + capacityContainer + " g of salad" + "<br>" + capacityContainer + " g of red cabbage";
    }
    function showOrder() {
        getVerse(basis, topping, sauce);
    }
    function getVerse(basis, topping, sauce) {
        let wert1 = Math.floor(Math.random() * basis.length);
        let wert2 = Math.floor(Math.random() * topping.length);
        let wert3 = Math.floor(Math.random() * sauce.length);
        let werte = basis[wert1] + "  " + topping[wert2] + "  " + sauce[wert3];
        let order = document.getElementById("order");
        order.innerHTML = "Order:" + "<br>" + "<br>" + " I would like a " + basis[wert1] + "  " + " with " + topping[wert2] + " " + " and " + sauce[wert3] + "," + " please.";
        basis.splice(wert1, 1);
        topping.splice(wert2, 1);
        sauce.splice(wert3, 1);
        return werte;
    }
    function showStaff() {
        for (let i = 0; i < staffAmount; i++) {
            let staff = new DönerTrainer_Endabgabe.Staff(new DönerTrainer_Endabgabe.Vector(200, 0));
            staffs.push(staff);
        }
        for (let staff of staffs) {
            staff.draw();
        }
    }
    function showCustomer() {
        for (let i = 0; i < customerAomunt; i++) {
            let customer = new DönerTrainer_Endabgabe.Customer(new DönerTrainer_Endabgabe.Vector(-100, 0));
            customers.push(customer);
        }
        for (let customer of customers) {
            let interval = setInterval(function () {
                customer.draw();
            }, 2000);
            if (interval >= customerAomunt) {
                clearInterval(interval);
            }
        }
    }
    function drawSalad() {
        let salad = new DönerTrainer_Endabgabe.Salad(new DönerTrainer_Endabgabe.Vector(100, 475));
        let salad2 = new DönerTrainer_Endabgabe.Salad(new DönerTrainer_Endabgabe.Vector(-70, 100));
        ingredients.push(salad, salad2);
        console.log(ingredients);
    }
    function drawRedCabbage() {
        let redCabbage = new DönerTrainer_Endabgabe.RedCabbage(new DönerTrainer_Endabgabe.Vector(100, 238));
        let redCabbage2 = new DönerTrainer_Endabgabe.RedCabbage(new DönerTrainer_Endabgabe.Vector(-40, 100));
        ingredients.push(redCabbage, redCabbage2);
        console.log(ingredients);
    }
    function drawOnion() {
        let onion = new DönerTrainer_Endabgabe.Onion(new DönerTrainer_Endabgabe.Vector(150, 238));
        let onion2 = new DönerTrainer_Endabgabe.Onion(new DönerTrainer_Endabgabe.Vector(-10, 100));
        ingredients.push(onion, onion2);
        console.log(ingredients);
    }
    function drawCorn() {
        let corn = new DönerTrainer_Endabgabe.Corn(new DönerTrainer_Endabgabe.Vector(24, 50));
        let corn2 = new DönerTrainer_Endabgabe.Corn(new DönerTrainer_Endabgabe.Vector(193, 162));
        ingredients.push(corn, corn2);
        console.log(ingredients);
    }
    function drawTomato() {
        let tomato = new DönerTrainer_Endabgabe.Tomato(new DönerTrainer_Endabgabe.Vector(42, 26));
        let tomato2 = new DönerTrainer_Endabgabe.Tomato(new DönerTrainer_Endabgabe.Vector(243, 163));
        ingredients.push(tomato, tomato2);
        console.log(ingredients);
    }
    function drawDoenerKebap() {
        let doener = new DönerTrainer_Endabgabe.DoenerKebap(new DönerTrainer_Endabgabe.Vector(-10, -90));
        ingredients.push(doener);
        console.log(ingredients);
    }
    function drawLahmacun() {
        let lahmacun = new DönerTrainer_Endabgabe.Lahmacun(new DönerTrainer_Endabgabe.Vector(85, 40));
        ingredients.push(lahmacun);
        console.log(ingredients);
    }
    function drawYufka() {
        let yufka = new DönerTrainer_Endabgabe.Yufka(new DönerTrainer_Endabgabe.Vector(-40, 10));
        ingredients.push(yufka);
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