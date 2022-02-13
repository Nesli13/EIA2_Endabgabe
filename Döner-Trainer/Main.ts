namespace DönerTrainer_Endabgabe {
    //let container: HTMLDivElement;
    //let storage: HTMLDivElement;
    //let available: boolean = true;
    let staffAmount: number;
    let customerAomunt: number;
    let breakofStaff: number;
    let capacityMaterial: number;
    // let orderList: HTMLDivElement;
    //let request: Request[];
    let capacityContainer: number;
    let staffs: Staff[] = [];
    let customers: Customer[] = [];
    //let orders: Order[] = [];
    //let persons:Person[] = [];
    let ingredients: Ingredient[] = [];
    let formData: FormData;
    let basis: string[] = ["Döner", "Lahmacun", "Yufka"];
    let topping: string[] = ["onion", "salad", "red cabbage", "corn", "tomato"];
    let sauce: string[] = ["sauce", "hot-sauce"];

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement | null;
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let startGameButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#startGameButton");
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


    }

    function prepareGame(_event: Event): void {
        formData = new FormData(document.forms[0]);
        console.log(formData);
        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
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
    function createGameScreen(): void {

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



        canvas = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        console.log(crc2);
        //document.querySelector("#saladButton").addEventListener("click", showCapacity);

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
        window.setInterval(update, 20);


    }

    function update(): void {
        //console.log("");
    }
    
    function showCapacity(): void {

        let storage: HTMLElement = document.getElementById("storage");
        storage.innerHTML = "Storage" + "<br>" + "<br>" + capacityMaterial + " kg of meat " + "<br>" + capacityMaterial + " kg of onion " + "<br>" + capacityMaterial + " kg of corn " + "<br>" + capacityMaterial + " kg of tomato " + "<br>" + capacityMaterial + " kg of salad" + "<br>" + capacityMaterial + " kg of red cabbage";

        let containerStorage: HTMLElement = document.getElementById("container-storage");
        containerStorage.innerHTML = "Container-Storage" + "<br>" + " This is what you have left:" + "<br>" + capacityContainer + " g of meat " + "<br>" + capacityContainer + " g of onion " + "<br>" + capacityContainer + " g of corn " + "<br>" + capacityContainer + " g of tomato " + "<br>" + capacityContainer + " g of salad" + "<br>" + capacityContainer + " g of red cabbage";


    }

    function showOrder(): void {

        getVerse(basis, topping, sauce);
    }
    function getVerse(basis: string[], topping: string[], sauce: string[]): string {
        let wert1: number = Math.floor(Math.random() * basis.length);
        let wert2: number = Math.floor(Math.random() * topping.length);
        let wert3: number = Math.floor(Math.random() * sauce.length);

        let werte: string = basis[wert1] + "  " + topping[wert2] + "  " + sauce[wert3];

        let order: HTMLElement = document.getElementById("order");
        order.innerHTML = "Order:" + "<br>" + "<br>" + " I would like a " + basis[wert1] + "  " + " with " + topping[wert2] + " " + " and " + sauce[wert3] + "," + " please.";
        basis.splice(wert1, 1);
        topping.splice(wert2, 1);
        sauce.splice(wert3, 1);

        return werte;
    }
    function showStaff(): void {
        for (let i: number = 0; i < staffAmount; i++) {
            let staff: Staff = new Staff(new Vector(200, 0));
            staffs.push(staff);
        }
        for (let staff of staffs) {
            staff.draw();

        }
    }
    function showCustomer(): void {
        for (let i: number = 0; i < customerAomunt; i++) {
            let customer: Customer = new Customer(new Vector(-100, 0));
            customers.push(customer);


        }
        for (let customer of customers) {
            setInterval(
                function (): void {
                    customer.draw();

                }, 2000);
            if (customers.length == customerAomunt) {
                break;
            }
        }

    }


    function drawSalad(): void {
        let salad: Salad = new Salad(new Vector(100, 475));
        let salad2: Salad = new Salad(new Vector(-70, 100));
        ingredients.push(salad, salad2);
        console.log(ingredients);
    }

    function drawRedCabbage(): void {
        let redCabbage: RedCabbage = new RedCabbage(new Vector(100, 238));
        let redCabbage2: RedCabbage = new RedCabbage(new Vector(-40, 100));
        ingredients.push(redCabbage, redCabbage2);
        console.log(ingredients);

    }
    function drawOnion(): void {
        let onion: Onion = new Onion(new Vector(150, 238));
        let onion2: Onion = new Onion(new Vector(-10, 100));
        ingredients.push(onion, onion2);
        console.log(ingredients);

    }
    function drawCorn(): void {
        let corn: Corn = new Corn(new Vector(24, 50));
        let corn2: Corn = new Corn(new Vector(193, 162));
        ingredients.push(corn, corn2);
        console.log(ingredients);

    }
    function drawTomato(): void {
        let tomato: Tomato = new Tomato(new Vector(42, 26));
        let tomato2: Tomato = new Tomato(new Vector(243, 163));
        ingredients.push(tomato, tomato2);
        console.log(ingredients);

    }
    function drawDoenerKebap(): void {
        let doener: DoenerKebap = new DoenerKebap(new Vector(-10, -90));
        ingredients.push(doener);
        console.log(ingredients);

    }
    function drawLahmacun(): void {
        let lahmacun: Lahmacun = new Lahmacun(new Vector(85, 40));
        ingredients.push(lahmacun);
        console.log(ingredients);

    }
    function drawYufka(): void {
        let yufka: Yufka = new Yufka(new Vector(-40, 10));
        ingredients.push(yufka);
        console.log(ingredients);
        for (let ingredient of ingredients) {
            ingredient.draw();
        }
    }



    //Background
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


}