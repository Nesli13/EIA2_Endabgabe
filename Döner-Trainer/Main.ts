/* Döner_Trainer_Endabgabe
Name: Neslisah Koc
Matrikel: 270155
Datum: 15.02.2022
Quellen: Zusammenarbeit mit Verena Rothweiler
*/
namespace DönerTrainer_Endabgabe {

    let formData: FormData;
    let staffAmount: number;
    let customerAomunt: number;
    let capacityMaterial: number;
    let capacityContainer: number;
    let breakofStaff: number;
    //let staffIsMad: boolean == false;
    //let customerIsMad: boolean == false;

    // Arrays  
    let orderList: string[] = [];
    let request: string[] = [];
    let staffs: Staff[] = [];
    let customers: Customer[] = [];
    let ingredients: Ingredient[] = [];

    //vordefinierte Arrays für Bestellung
    let basis: string[] = ["Döner with meat", "Lahmacun with minced meat", "Yufka with meat"];
    let topping: string[] = ["onion", "salad", "red cabbage", "corn", "tomato"];
    let sauce: string[] = ["sauce", "hot-sauce"];

    //interface für Storage und container-storage
    interface Storage {
        salad: number;
        redCabbage: number;
        onion: number;
        corn: number;
        tomato: number;

    }

    let storageLeft: Storage;
    let ingredientLeft: Storage;

    //rufe canvas und crc2 auf und lass es für alle Klassen greifbar machen
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement | null;

    //beim laden der Seite wird handleLoad aufgerufen
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        //startGameButton deklarieren und prepareGame aufrufen
        let startGameButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#startGameButton");
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
    function prepareGame(_event: Event): void {

        //neues formData Objekt wird erzeugt und alle Schlüsselwerte-Paare werden mitgegeben
        formData = new FormData(document.forms[0]);
        console.log(formData);

        //deklariere form und body und entferne form vom body
        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
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
    function createGameScreen(): void {

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
        canvas = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        console.log(crc2);


        //rufe alle Funktionen auf 
        drawCounter(new Vector(100, 475), "#D3d3d3");
        drawCuttingBoard(new Vector(100, 175), "#D3d3d3");
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
        let saladBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#saladButton");
        saladBtn.addEventListener("click", updateSalad);
        let onionBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#onionButton");
        onionBtn.addEventListener("click", updateOnion);
        let redCabbageBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#redCabbageButton");
        redCabbageBtn.addEventListener("click", updateCabbage);
        let tomatoBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#tomatoButton");
        tomatoBtn.addEventListener("click", updateTomato);
        let cornBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#cornButton");
        cornBtn.addEventListener("click", updateCorn);
        let refill: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#cuttingBoard");
        refill.addEventListener("click", refillContainer);
        let reorder: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#reorder");
        reorder.addEventListener("click", reorderMaterials);
        let doenerBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#doenerButton");
        doenerBtn.addEventListener("click", updateDoener);
        let yufkaBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#yufkaButton");
        yufkaBtn.addEventListener("click", updateYufka);
        let lahmacunBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#lahmacunButton");
        lahmacunBtn.addEventListener("click", updateLahmacun);
        let sauceBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#sauceButton");
        sauceBtn.addEventListener("click", updateSauce);
        let hotSauceBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#hot-sauceButton");
        hotSauceBtn.addEventListener("click", updateHotSauce);
        let check: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#orderFinished");
        check.addEventListener("click", checkOrder);


        // rufe update in alle 20 millisekunden
        window.setInterval(update, 20);

        //rufe showCustomer alle 3 min. auf.
        setInterval(showCustomer, 30000);
    }

    function update(): void {
        //console.log("");
        //hier soll die move-methode vom staff aufgerufen werden
    }

    //Container-stand anzeigen in den entsprechenden Divs
    function showCapacity(): void {

        let storage: HTMLElement = document.getElementById("storage");
        storage.innerHTML = "Storage" + "<br>" + "<br>" + ingredientLeft.onion + " g of onion " + "<br>" + ingredientLeft.corn + " g of corn " + "<br>" + ingredientLeft.tomato + " g of tomato " + "<br>" + ingredientLeft.salad + " g of salad" + "<br>" + ingredientLeft.redCabbage + " g of red cabbage";

        let containerStorage: HTMLElement = document.getElementById("container-storage");
        containerStorage.innerHTML = "Container-Storage" + "<br>" + " This is what you have left:" + "<br>" + storageLeft.onion + " g of onion " + "<br>" + storageLeft.corn + " g of corn " + "<br>" + storageLeft.tomato + " g of tomato " + "<br>" + storageLeft.salad + " g of salad" + "<br>" + storageLeft.redCabbage + " g of red cabbage";


    }
    //ingredients in storage-Div auffüllen
    function reorderMaterials(_event: Event): void {
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
    function refillContainer(_event: MouseEvent): void {
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
    function updateSalad(_event: MouseEvent): void {
        //deklariere element 
        let element: string = " salad ,";
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

    function updateOnion(_event: MouseEvent): void {
        let element: string = " onion ,";
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

    function updateCabbage(_event: MouseEvent): void {
        let element: string = " red cabbage ,";
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
    function updateCorn(_event: MouseEvent): void {
        let element: string = " corn ,";
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
    function updateTomato(_event: MouseEvent): void {
        let element: string = " tomato ,";
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
    function updateDoener(_event: MouseEvent): void {
        let element: string = " Döner with meat ,";
        orderList.push(element);
        console.log(orderList);

        document.getElementById("selection").innerHTML += element;


    }
    function updateYufka(_event: MouseEvent): void {
        let element: string = " Yufka with meat ,";
        orderList.push(element);
        console.log(orderList);
        document.getElementById("selection").innerHTML += element;


    }
    function updateLahmacun(_event: MouseEvent): void {
        let element: string = " Lahmacun with minced meat ,";
        orderList.push(element);
        console.log(orderList);

        document.getElementById("selection").innerHTML += element;

    }
    function updateSauce(_event: MouseEvent): void {
        let element: string = " sauce ,";
        orderList.push(element);
        console.log(orderList);

        document.getElementById("selection").innerHTML += element;

    }
    function updateHotSauce(_event: MouseEvent): void {
        let element: string = " hot-sauce ,";
        orderList.push(element);
        console.log(orderList);

        document.getElementById("selection").innerHTML += element;

    }
    //ende update ingredients


    //zeige auswahl von Zutaten
    function showSelection(): void {

        let selectionDiv: HTMLElement = document.getElementById("selection");
        selectionDiv.innerHTML += "<br>" + " ";


    }


    //Kunden enstprechender Anzahl zeichnen lassen
    function showCustomer(): void {

        let interval: number = setInterval(
            function (): void {


                let customer: Customer = new Customer(new Vector(-100, 0));
                customers.push(customer);
                customer.draw();

                if (customers.length == customerAomunt) {
                    clearInterval(interval);
                    customers.length = 0;

                }
                // tslint:disable-next-line: align
            }, 2000);
    }

    function checkOrder(_event: Event): void {

        //vergleiche order(request) mit auswahl(orderList)
        for (let i: number = 0; i < request.length; i++) {
            if (request[i] == orderList[i]) {

                // kunde löschen, div leeren
                document.getElementById("order").innerHTML = " ";


            } else {
                //orderList leeren
                document.getElementById("selection").innerHTML = "Selection of ingredients: " + "<br>";

            }

        }
        //div mit neuer Bestellung füllen,
        showOrder();

    }


    function showStaff(): void {

        //Mitarbeiter zeichnen lassen und pushe es in staffs-Array
        for (let i: number = 0; i < staffAmount; i++) {
            let staff: Staff = new Staff(new Vector(200, 0));
            staffs.push(staff);

        }
        for (let staff of staffs) {
            staff.draw();

        }


    }


    function showOrder(): void {
        //gebe random Bestellungen aus

        let wert1: number = Math.floor(Math.random() * basis.length);
        let wert2: number = Math.floor(Math.random() * topping.length);
        let wert3: number = Math.floor(Math.random() * sauce.length);

        let werte: string = basis[wert1] + "  " + topping[wert2] + "  " + sauce[wert3];
        request.push(werte);
        console.log("request array:" + request);

        let order: HTMLElement = document.getElementById("order");
        order.innerHTML = "Order:" + "<br>" + "<br>" + " I would like a " + basis[wert1] + "  " + " with " + topping[wert2] + " " + " and " + sauce[wert3] + "," + " please.";


    }



    //alle Zutaten zeichnen lassen
    function drawSalad(): void {
        let salad: Salad = new Salad(0, 0, new Vector(100, 475));
        let salad2: Salad = new Salad(0, 0, new Vector(-70, 100));
        ingredients.push(salad, salad2);
        console.log(ingredients);
    }

    function drawRedCabbage(): void {
        let redCabbage: RedCabbage = new RedCabbage(0, 0, new Vector(100, 238));
        let redCabbage2: RedCabbage = new RedCabbage(0, 0, new Vector(-40, 100));
        ingredients.push(redCabbage, redCabbage2);
        console.log(ingredients);

    }
    function drawOnion(): void {
        let onion: Onion = new Onion(0, 0, new Vector(150, 238));
        let onion2: Onion = new Onion(0, 0, new Vector(-10, 100));
        ingredients.push(onion, onion2);
        console.log(ingredients);

    }
    function drawCorn(): void {
        let corn: Corn = new Corn(0, 0, new Vector(24, 50));
        let corn2: Corn = new Corn(0, 0, new Vector(193, 162));
        ingredients.push(corn, corn2);
        console.log(ingredients);

    }
    function drawTomato(): void {
        let tomato: Tomato = new Tomato(0, 0, new Vector(42, 26));
        let tomato2: Tomato = new Tomato(0, 0, new Vector(243, 163));
        ingredients.push(tomato, tomato2);
        console.log(ingredients);

    }
    function drawDoenerKebap(): void {
        let doener: DoenerKebap = new DoenerKebap(0, 0, new Vector(-10, -90));
        ingredients.push(doener);
        console.log(ingredients);

    }
    function drawLahmacun(): void {
        let lahmacun: Lahmacun = new Lahmacun(0, 0, new Vector(85, 40));
        ingredients.push(lahmacun);
        console.log(ingredients);

    }
    function drawYufka(): void {
        let yufka: Yufka = new Yufka(0, 0, new Vector(-40, 10));
        ingredients.push(yufka);
        console.log(ingredients);
        for (let ingredient of ingredients) {
            ingredient.draw();
        }
    }



    //Background zeichnen Theke und cuttingboard
    function drawCounter(_position: Vector, _fillColor: string): void {
        //Counter
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = _fillColor;
        crc2.fillRect(0, 0, 850, 150);
        crc2.restore();

        //salad Counter
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.strokeStyle = "green";
        crc2.strokeRect(250, 50, 75, 75);
        crc2.restore();

        //red cabbage Counter
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.strokeStyle = "purple";
        crc2.strokeRect(350, 50, 75, 75);
        crc2.restore();

        //onion Counter
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.strokeStyle = "#FFD39B";
        crc2.strokeRect(450, 50, 75, 75);
        crc2.restore();

        //corn Counter
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.strokeStyle = "yellow";
        crc2.strokeRect(550, 50, 75, 75);
        crc2.restore();

        //tomato Counter
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.strokeStyle = "red";
        crc2.strokeRect(650, 50, 75, 75);
        crc2.restore();

        //garlic sauce Counter
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "#F5F5DC";
        crc2.fillRect(750, 50, 35, 75);
        crc2.restore();

        //hot sauce Counter
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "#8B0000";
        crc2.fillRect(790, 50, 35, 75);
        crc2.restore();
    }

    function drawCuttingBoard(_position: Vector, _fillColor: string): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = _fillColor;
        crc2.fillRect(0, 0, 350, 150);
        crc2.restore();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "#CD853F";
        crc2.fillRect(10, 10, 250, 120);
        crc2.restore();

        //knife
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(230, 20, 80, 0, .25 * Math.PI, false);
        crc2.closePath();
        crc2.lineWidth = 5;
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.restore();


    }


} //ende namespace