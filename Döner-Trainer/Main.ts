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
        drawCounter(new Vector(0, 300), new Vector(900, 300));

    }
    function drawCounter(_position: Vector, _size: Vector): void {
        console.log(drawCounter);
    }
}