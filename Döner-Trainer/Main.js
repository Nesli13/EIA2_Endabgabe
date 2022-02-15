"use strict";
/* Döner_Trainer_Endabgabe
Name: Neslisah Koc
Matrikel: 270155
Datum: 15.02.2022
Quellen: Zusammenarbeit mit Verena Rothweiler
*/
var DönerTrainer_Endabgabe;
(function (DönerTrainer_Endabgabe) {
    let formData;
    let staffAmount;
    let customerAomunt;
    let capacityMaterial;
    let capacityContainer;
    let breakofStaff;
    //let staffIsMad: boolean == false;
    //let customerIsMad: boolean == false;
    // Arrays  
    let orderList = [];
    let request = [];
    let staffs = [];
    let customers = [];
    let ingredients = [];
    //vordefinierte Arrays für Bestellung
    let basis = ["Döner with meat", "Lahmacun with minced meat", "Yufka with meat"];
    let topping = ["onion", "salad", "red cabbage", "corn", "tomato"];
    let sauce = ["sauce", "hot-sauce"];
    let storageLeft;
    let ingredientLeft;
    //beim laden der Seite wird handleLoad aufgerufen
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        //startGameButton deklarieren und prepareGame aufrufen
        let startGameButton = document.querySelector("#startGameButton");
        startGameButton.addEventListener("click", prepareGame);
        //verstecke alle Elemente, die nicht in der Formular-Seite angezeigt werden soll
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
        document.getElementById("hot-sauceButton").hidden = true;
    }
    //bereite Spiel vor
    function prepareGame(_event) {
        //neues formData Objekt wird erzeugt und alle Schlüsselwerte-Paare werden mitgegeben
        formData = new FormData(document.forms[0]);
        console.log(formData);
        //deklariere form und body und entferne form vom body
        let form = document.querySelector("form");
        let body = document.querySelector("body");
        body.removeChild(form);
        //lasse dir die Werte vom Formular holen
        staffAmount = Number(formData.get("quantityStaff"));
        customerAomunt = Number(formData.get("quantityCustomer"));
        breakofStaff = Number(formData.get("restPeriodOfStaff"));
        capacityMaterial = Number(formData.get("capacityOfMaterials"));
        capacityContainer = Number(formData.get("capacityOfContainers"));
        //gebe allen Zutaten den Wert der im Formular ausgewählt wurde für Container --> zum updaten der werte
        storageLeft = {
            salad: capacityContainer,
            redCabbage: capacityContainer,
            onion: capacityContainer,
            corn: capacityContainer,
            tomato: capacityContainer
        };
        //gebe allen Zutaten den Wert der im Formular ausgewählt wurde für Gesamtkapazität
        ingredientLeft = {
            salad: capacityMaterial,
            redCabbage: capacityMaterial,
            onion: capacityMaterial,
            corn: capacityMaterial,
            tomato: capacityMaterial
        };
        console.log(staffAmount + customerAomunt + breakofStaff + capacityMaterial + capacityContainer);
        console.log(breakofStaff);
        //rufe dir die Spielerseite auf
        createGameScreen();
    }
    function createGameScreen() {
        //lass dir alle Elemente anzeigen, die versteckt waren
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
        document.getElementById("hot-sauceButton").hidden = false;
        //canvas auswählen
        DönerTrainer_Endabgabe.canvas = document.querySelector("canvas");
        DönerTrainer_Endabgabe.crc2 = DönerTrainer_Endabgabe.canvas.getContext("2d");
        console.log(DönerTrainer_Endabgabe.crc2);
        //rufe alle Funktionen auf 
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
        showSelection();
        //Button deklarieren für alle ingredients und installiere click-Listener
        let saladBtn = document.querySelector("#saladButton");
        saladBtn.addEventListener("click", updateSalad);
        let onionBtn = document.querySelector("#onionButton");
        onionBtn.addEventListener("click", updateOnion);
        let redCabbageBtn = document.querySelector("#redCabbageButton");
        redCabbageBtn.addEventListener("click", updateCabbage);
        let tomatoBtn = document.querySelector("#tomatoButton");
        tomatoBtn.addEventListener("click", updateTomato);
        let cornBtn = document.querySelector("#cornButton");
        cornBtn.addEventListener("click", updateCorn);
        let refill = document.querySelector("#cuttingBoard");
        refill.addEventListener("click", refillContainer);
        let reorder = document.querySelector("#reorder");
        reorder.addEventListener("click", reorderMaterials);
        let doenerBtn = document.querySelector("#doenerButton");
        doenerBtn.addEventListener("click", updateDoener);
        let yufkaBtn = document.querySelector("#yufkaButton");
        yufkaBtn.addEventListener("click", updateYufka);
        let lahmacunBtn = document.querySelector("#lahmacunButton");
        lahmacunBtn.addEventListener("click", updateLahmacun);
        let sauceBtn = document.querySelector("#sauceButton");
        sauceBtn.addEventListener("click", updateSauce);
        let hotSauceBtn = document.querySelector("#hot-sauceButton");
        hotSauceBtn.addEventListener("click", updateHotSauce);
        let check = document.querySelector("#orderFinished");
        check.addEventListener("click", checkOrder);
        // rufe update in alle 20 millisekunden
        window.setInterval(update, 20);
        //rufe showCustomer alle 3 min. auf.
        setInterval(showCustomer, 30000);
    }
    function update() {
        //console.log("");
        //hier soll die move-methode vom staff aufgerufen werden
    }
    //Container-stand anzeigen in den entsprechenden Divs
    function showCapacity() {
        let storage = document.getElementById("storage");
        storage.innerHTML = "Storage" + "<br>" + "<br>" + ingredientLeft.onion + " g of onion " + "<br>" + ingredientLeft.corn + " g of corn " + "<br>" + ingredientLeft.tomato + " g of tomato " + "<br>" + ingredientLeft.salad + " g of salad" + "<br>" + ingredientLeft.redCabbage + " g of red cabbage";
        let containerStorage = document.getElementById("container-storage");
        containerStorage.innerHTML = "Container-Storage" + "<br>" + " This is what you have left:" + "<br>" + storageLeft.onion + " g of onion " + "<br>" + storageLeft.corn + " g of corn " + "<br>" + storageLeft.tomato + " g of tomato " + "<br>" + storageLeft.salad + " g of salad" + "<br>" + storageLeft.redCabbage + " g of red cabbage";
    }
    //ingredients in storage-Div auffüllen
    function reorderMaterials(_event) {
        ingredientLeft = {
            salad: capacityMaterial,
            redCabbage: capacityMaterial,
            onion: capacityMaterial,
            corn: capacityMaterial,
            tomato: capacityMaterial
        };
        showCapacity();
    }
    //ingredients in container-storage-Div auffüllen
    function refillContainer(_event) {
        storageLeft = {
            salad: capacityContainer,
            redCabbage: capacityContainer,
            onion: capacityContainer,
            corn: capacityContainer,
            tomato: capacityContainer
        };
        showCapacity();
    }
    //Update ingredients
    function updateSalad(_event) {
        //deklariere element 
        let element = " salad ,";
        //pushe diese in orderList
        orderList.push(element);
        console.log(orderList);
        //ziehe -30 vom storage ab
        storageLeft.salad -= 30;
        //rufe Alarm, wenn anzahl vom ingredients  weniger als 0
        if (storageLeft.salad <= 0) {
            alert("Please cut salad!");
        }
        //zeige das im div an
        document.getElementById("selection").innerHTML += element;
        //ziehe aus der Gesamtkapazität die anzahl storageLeft
        ingredientLeft.salad -= storageLeft.salad;
        showCapacity();
    }
    function updateOnion(_event) {
        let element = " onion ,";
        orderList.push(element);
        console.log(orderList);
        storageLeft.onion -= 50;
        if (storageLeft.onion <= 0) {
            alert("Please cut onion!");
        }
        document.getElementById("selection").innerHTML += element;
        ingredientLeft.onion -= storageLeft.onion;
        showCapacity();
    }
    function updateCabbage(_event) {
        let element = " red cabbage ,";
        orderList.push(element);
        console.log(orderList);
        storageLeft.redCabbage -= 40;
        if (storageLeft.redCabbage <= 0) {
            alert("Please cut red cabbage!");
        }
        document.getElementById("selection").innerHTML += element;
        ingredientLeft.redCabbage -= storageLeft.redCabbage;
        showCapacity();
    }
    function updateCorn(_event) {
        let element = " corn ,";
        orderList.push(element);
        console.log(orderList);
        storageLeft.corn -= 20;
        if (storageLeft.corn <= 0) {
            alert("Please cut corn!");
        }
        document.getElementById("selection").innerHTML += element;
        ingredientLeft.corn -= storageLeft.corn;
        showCapacity();
    }
    function updateTomato(_event) {
        let element = " tomato ,";
        orderList.push(element);
        console.log(orderList);
        storageLeft.tomato -= 50;
        if (storageLeft.tomato <= 0) {
            alert("Please cut tomato!");
        }
        document.getElementById("selection").innerHTML += element;
        ingredientLeft.tomato -= storageLeft.tomato;
        showCapacity();
    }
    function updateDoener(_event) {
        let element = " Döner with meat ,";
        orderList.push(element);
        console.log(orderList);
        document.getElementById("selection").innerHTML += element;
    }
    function updateYufka(_event) {
        let element = " Yufka with meat ,";
        orderList.push(element);
        console.log(orderList);
        document.getElementById("selection").innerHTML += element;
    }
    function updateLahmacun(_event) {
        let element = " Lahmacun with minced meat ,";
        orderList.push(element);
        console.log(orderList);
        document.getElementById("selection").innerHTML += element;
    }
    function updateSauce(_event) {
        let element = " sauce ,";
        orderList.push(element);
        console.log(orderList);
        document.getElementById("selection").innerHTML += element;
    }
    function updateHotSauce(_event) {
        let element = " hot-sauce ,";
        orderList.push(element);
        console.log(orderList);
        document.getElementById("selection").innerHTML += element;
    }
    //ende update ingredients
    //zeige auswahl von Zutaten
    function showSelection() {
        let selectionDiv = document.getElementById("selection");
        selectionDiv.innerHTML += "<br>" + " ";
    }
    //Kunden enstprechender Anzahl zeichnen lassen
    function showCustomer() {
        let interval = setInterval(function () {
            let customer = new DönerTrainer_Endabgabe.Customer(new DönerTrainer_Endabgabe.Vector(-100, 0));
            customers.push(customer);
            customer.draw();
            if (customers.length == customerAomunt) {
                clearInterval(interval);
                customers.length = 0;
            }
            // tslint:disable-next-line: align
        }, 2000);
    }
    function checkOrder(_event) {
        //vergleiche order(request) mit auswahl(orderList)
        for (let i = 0; i < request.length; i++) {
            if (request[i] == orderList[i]) {
                // kunde löschen, div leeren
                document.getElementById("order").innerHTML = " ";
            }
            else {
                //orderList leeren
                document.getElementById("selection").innerHTML = "Selection of ingredients: " + "<br>";
            }
        }
        //div mit neuer Bestellung füllen,
        showOrder();
    }
    function showStaff() {
        //Mitarbeiter zeichnen lassen und pushe es in staffs-Array
        for (let i = 0; i < staffAmount; i++) {
            let staff = new DönerTrainer_Endabgabe.Staff(new DönerTrainer_Endabgabe.Vector(200, 0));
            staffs.push(staff);
        }
        for (let staff of staffs) {
            staff.draw();
        }
    }
    function showOrder() {
        //gebe random Bestellungen aus
        let wert1 = Math.floor(Math.random() * basis.length);
        let wert2 = Math.floor(Math.random() * topping.length);
        let wert3 = Math.floor(Math.random() * sauce.length);
        let werte = basis[wert1] + "  " + topping[wert2] + "  " + sauce[wert3];
        request.push(werte);
        console.log("request array:" + request);
        let order = document.getElementById("order");
        order.innerHTML = "Order:" + "<br>" + "<br>" + " I would like a " + basis[wert1] + "  " + " with " + topping[wert2] + " " + " and " + sauce[wert3] + "," + " please.";
    }
    //alle Zutaten zeichnen lassen
    function drawSalad() {
        let salad = new DönerTrainer_Endabgabe.Salad(0, 0, new DönerTrainer_Endabgabe.Vector(100, 475));
        let salad2 = new DönerTrainer_Endabgabe.Salad(0, 0, new DönerTrainer_Endabgabe.Vector(-70, 100));
        ingredients.push(salad, salad2);
        console.log(ingredients);
    }
    function drawRedCabbage() {
        let redCabbage = new DönerTrainer_Endabgabe.RedCabbage(0, 0, new DönerTrainer_Endabgabe.Vector(100, 238));
        let redCabbage2 = new DönerTrainer_Endabgabe.RedCabbage(0, 0, new DönerTrainer_Endabgabe.Vector(-40, 100));
        ingredients.push(redCabbage, redCabbage2);
        console.log(ingredients);
    }
    function drawOnion() {
        let onion = new DönerTrainer_Endabgabe.Onion(0, 0, new DönerTrainer_Endabgabe.Vector(150, 238));
        let onion2 = new DönerTrainer_Endabgabe.Onion(0, 0, new DönerTrainer_Endabgabe.Vector(-10, 100));
        ingredients.push(onion, onion2);
        console.log(ingredients);
    }
    function drawCorn() {
        let corn = new DönerTrainer_Endabgabe.Corn(0, 0, new DönerTrainer_Endabgabe.Vector(24, 50));
        let corn2 = new DönerTrainer_Endabgabe.Corn(0, 0, new DönerTrainer_Endabgabe.Vector(193, 162));
        ingredients.push(corn, corn2);
        console.log(ingredients);
    }
    function drawTomato() {
        let tomato = new DönerTrainer_Endabgabe.Tomato(0, 0, new DönerTrainer_Endabgabe.Vector(42, 26));
        let tomato2 = new DönerTrainer_Endabgabe.Tomato(0, 0, new DönerTrainer_Endabgabe.Vector(243, 163));
        ingredients.push(tomato, tomato2);
        console.log(ingredients);
    }
    function drawDoenerKebap() {
        let doener = new DönerTrainer_Endabgabe.DoenerKebap(0, 0, new DönerTrainer_Endabgabe.Vector(-10, -90));
        ingredients.push(doener);
        console.log(ingredients);
    }
    function drawLahmacun() {
        let lahmacun = new DönerTrainer_Endabgabe.Lahmacun(0, 0, new DönerTrainer_Endabgabe.Vector(85, 40));
        ingredients.push(lahmacun);
        console.log(ingredients);
    }
    function drawYufka() {
        let yufka = new DönerTrainer_Endabgabe.Yufka(0, 0, new DönerTrainer_Endabgabe.Vector(-40, 10));
        ingredients.push(yufka);
        console.log(ingredients);
        for (let ingredient of ingredients) {
            ingredient.draw();
        }
    }
    //Background zeichnen Theke und cuttingboard
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
})(DönerTrainer_Endabgabe || (DönerTrainer_Endabgabe = {})); //ende namespace
//# sourceMappingURL=Main.js.map