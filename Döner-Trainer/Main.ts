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

        drawCounter(new Vector(100, 475), "#A3A3A3");
        drawCuttingBoard(new Vector(100, 175), "#A3A3A3");
        drawCustomer(new Vector(300, 300));

    }
    function drawCustomer(_position: Vector): void {
        
        //madCustomer
        //body
        crc2.beginPath();
        crc2.save();
        crc2.translate(-200 + _position.x, _position.y);
        crc2.fillStyle = "red";
        crc2.arc(85, 25, 35, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //head
        crc2.beginPath();
        crc2.save();
        crc2.fillStyle = "#ffdead";
        crc2.arc(85, -30, 25, -6, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //eyes
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.arc(73, -30, 4, 0, 2 * Math.PI);
        crc2.arc(93, -30, 4, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();

        //mouth
        crc2.beginPath();
        crc2.moveTo(73, -15);
        crc2.lineTo(100, -15);
        crc2.stroke();

        //arms
        crc2.beginPath();
        crc2.fillStyle = "#ffdead";
        crc2.arc(63, 20, 7, 0, 2 * Math.PI);
        crc2.arc(105, 20, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //feets
        crc2.beginPath();
        crc2.fillStyle = "blue";
        crc2.arc(70, 60, 8, 0, 2 * Math.PI);
        crc2.arc(95, 60, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();

        //hairs
        crc2.beginPath();
        crc2.moveTo(170, 260);
        crc2.lineTo(170, 245);
        crc2.moveTo(175, 260);
        crc2.lineTo(175, 245);
        crc2.moveTo(180, 260);
        crc2.lineTo(180, 245);
        crc2.moveTo(185, 260);
        crc2.lineTo(185, 245);
        crc2.moveTo(190, 260);
        crc2.lineTo(190, 245);
        crc2.moveTo(195, 260);
        crc2.lineTo(195, 245);
        crc2.moveTo(200, 260);
        crc2.lineTo(200, 245);
        crc2.stroke();
        crc2.restore();




    }

    function drawCounter(_position: Vector, _fillColor: string): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = _fillColor;
        crc2.fillRect(0, 0, 850, 150);
        crc2.restore();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "green";
        crc2.fillRect(250, 50, 75, 75);
        crc2.strokeRect(250, 50, 75, 75);
        crc2.restore();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "purple";
        crc2.fillRect(350, 50, 75, 75);
        crc2.strokeRect(350, 50, 75, 75);
        crc2.restore();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "#FFD39B";
        crc2.fillRect(450, 50, 75, 75);
        crc2.strokeRect(450, 50, 75, 75);
        crc2.restore();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "yellow";
        crc2.fillRect(550, 50, 75, 75);
        crc2.strokeRect(550, 50, 75, 75);
        crc2.restore();


        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "white";
        crc2.fillRect(650, 50, 50, 75);
        crc2.strokeRect(650, 50, 50, 75);
        crc2.restore();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "red";
        crc2.fillRect(720, 50, 50, 75);
        crc2.strokeRect(720, 50, 50, 75);
        crc2.restore();


        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "#F5F5DC";
        crc2.fillRect(790, 50, 50, 75);
        crc2.strokeRect(790, 50, 50, 75);
        crc2.restore();
    }

    function drawCuttingBoard(_position: Vector, _fillColor: string): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = _fillColor;
        crc2.fillRect(0, 0, 550, 150);
        crc2.restore();
    }
}