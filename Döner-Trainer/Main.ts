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
        console.log("staffAmount" + staffAmount, "customerAmount" + customerAomunt, "brekofStaff" + breakofStaff , "customerperminute" + customerPerMinute + "capacitymaterial" + capacityMaterial + "capacitycontainer" + capacityContainer);
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

        window.setInterval(update, 20);

    }
    function update(): void {
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);


    }

    function drawSalad(): void {
        let salad: Salad = new Salad(new Vector(100, 475));
        ingredients.push(salad);
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