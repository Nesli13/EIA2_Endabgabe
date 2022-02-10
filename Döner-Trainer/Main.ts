namespace DönerTrainer_Endabgabe {
    //let container: HTMLDivElement;
    //let storage: HTMLDivElement;
    //let available: boolean = true;
    let staffAmount: number;
    let customerAomunt: number;
    let breakofStaff: number;
    let customerPerMinute: number;
    let capacityMaterial: number;
    // let orderList: HTMLDivElement;
    //let request: Request[];
    let capacityContainer: number;
    //let staffs: Staff[] = [];
    //let orders: Order[] = [];
    //let persons:Person[] = [];
    let ingredients: Ingredient[] = [];
    let imgData: ImageData;
    let formData: FormData;
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement | null;
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let startGameButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#startGameButton");
        startGameButton.addEventListener("click", prepareGame);
        document.getElementById("canvas").hidden = true;
        document.getElementById("container").hidden = true;



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
        customerPerMinute = Number(formData.get("customerPerMin"));
        capacityMaterial = Number(formData.get("capacityOfMaterials"));
        capacityContainer = Number(formData.get("capacityOfContainers"));
        console.log("staffAmount" + staffAmount, "customerAmount" + customerAomunt, "brekofStaff" + breakofStaff, "customerperminute" + customerPerMinute + "capacitymaterial" + capacityMaterial + "capacitycontainer" + capacityContainer);
        console.log(breakofStaff);

        createGameScreen();
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

    }
    function createGameScreen(): void {
        document.getElementById("canvas").hidden = false;
        document.getElementById("container").hidden = false;

        canvas = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        console.log(crc2);

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

        window.setInterval(update, 20);

    }
    function update(): void {
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);


    }

    function drawSalad(): void {
        let salad: Salad = new Salad(new Vector(100, 475));
        let salad2: Salad = new Salad(new Vector(-70, 100));
        salad.containerAmount = Number(formData.get("capacityOfMaterials"));

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
    function showCapacity(): void {

        let storage: HTMLElement = document.getElementById("storage");
        storage.innerHTML = "Storage" + "<br>" + " This is what you have left:" + "<br>" + capacityMaterial + " kg of meat " + "<br>" + capacityMaterial + " kg of onion " + "<br>" + capacityMaterial + " kg of corn " + "<br>" + capacityMaterial + " kg of tomato " + "<br>" + capacityMaterial + " kg of salad" + "<br>" + capacityMaterial + "kg of red cabbage";

       
    }

   
}