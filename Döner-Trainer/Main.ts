namespace DönerTrainer_Endabgabe {
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

        createGameScreen();

    }
    function createGameScreen(): void {
        document.getElementById("canvas").hidden = false;
        document.getElementById("container").hidden = false;

        canvas = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        console.log(crc2);

        drawCounter(new Vector(100, 475), "#D3d3d3");
        drawCuttingBoard(new Vector(100, 175), "#D3d3d3");
        drawSalad(new Vector(100, 475));
        drawSalad(new Vector(-78, 100));
        drawRedCabbage(new Vector(100, 235));
        drawRedCabbage(new Vector(-45, 100));
        drawOnion(new Vector(150, 235));
        drawOnion(new Vector(-10, 100));
        drawCorn(new Vector(205, 188));
        drawCorn(new Vector(-70, -45));
        drawTomato(new Vector(-35, -43));
        drawTomato(new Vector(155, 95));
        //drawImpatientCustomer(new Vector(100, -50));
        //drawHappyCustomer(new Vector(100, 400));
        //drawMadCustomer(new Vector(800, 400));



    }
    

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
    function drawSalad(_position: Vector): void {
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "green";
        crc2.arc(_position.x + 165, _position.y - 370, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 173, _position.y - 380, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 175, _position.y - 380, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 185, _position.y - 370, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 188, _position.y - 375, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 190, _position.y - 370, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 175, _position.y - 400, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 180, _position.y - 400, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 193, _position.y - 400, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 195, _position.y - 400, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 199, _position.y - 390, 15, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        crc2.save();
    }
    function drawRedCabbage(_position: Vector): void {
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "purple";
        crc2.arc(_position.x + 165, _position.y - 370, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 173, _position.y - 380, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 175, _position.y - 380, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 185, _position.y - 370, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 188, _position.y - 375, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 190, _position.y - 370, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 175, _position.y - 400, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 180, _position.y - 400, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 193, _position.y - 400, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 195, _position.y - 400, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 199, _position.y - 390, 15, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        crc2.save();
    }
    function drawOnion(_position: Vector): void {
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "#FFD39B";
        crc2.arc(_position.x + 165, _position.y - 370, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 173, _position.y - 380, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 175, _position.y - 380, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 185, _position.y - 370, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 188, _position.y - 375, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 190, _position.y - 370, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 175, _position.y - 400, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 180, _position.y - 400, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 193, _position.y - 400, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 195, _position.y - 400, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 199, _position.y - 390, 15, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
    }
    function drawCorn(_position: Vector): void {
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "yellow";
        crc2.arc(_position.x + 165, _position.y - 370, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 173, _position.y - 380, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 175, _position.y - 380, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 185, _position.y - 370, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 188, _position.y - 375, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 190, _position.y - 370, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 175, _position.y - 400, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 180, _position.y - 400, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 193, _position.y - 400, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 195, _position.y - 400, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 199, _position.y - 390, 15, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        crc2.save();
    }
    function drawTomato(_position: Vector): void {
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "red";
        crc2.arc(_position.x + 165, _position.y - 370, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 173, _position.y - 380, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 175, _position.y - 380, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 185, _position.y - 370, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 188, _position.y - 375, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 190, _position.y - 370, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 175, _position.y - 400, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 180, _position.y - 400, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 193, _position.y - 400, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 195, _position.y - 400, 15, 0, 2 * Math.PI);
        crc2.arc(_position.x + 199, _position.y - 390, 15, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        crc2.save();
    }
}