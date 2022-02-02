namespace DönerTrainer_Endabgabe {
    /*let container: HTMLDivElement;
    let storage: HTMLDivElement;
    let timer: HTMLSpanElement;
    let startGame: boolean = false;
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
    let canvas: HTMLCanvasElement | null;
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let startGameButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#startGameButton");
        startGameButton.addEventListener("click", prepareGame);
        document.getElementById("canvas").hidden = true;

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
        canvas = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        console.log(crc2);
        drawCounter(new Vector(100, 475), "#A3A3A3");
        drawCuttingBoard(new Vector(100, 175), "#A3A3A3");

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