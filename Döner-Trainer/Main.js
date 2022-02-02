"use strict";
var DönerTrainer_Endabgabe;
(function (DönerTrainer_Endabgabe) {
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
    let formData;
    let canvas;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let startGameButton = document.querySelector("#startGameButton");
        startGameButton.addEventListener("click", prepareGame);
        document.getElementById("canvas").hidden = true;
    }
    function prepareGame(_event) {
        formData = new FormData(document.forms[0]);
        console.log(formData);
        let form = document.querySelector("form");
        let body = document.querySelector("body");
        body.removeChild(form);
        createGameScreen();
    }
    function createGameScreen() {
        document.getElementById("canvas").hidden = false;
        canvas = document.querySelector("canvas");
        DönerTrainer_Endabgabe.crc2 = canvas.getContext("2d");
        console.log(DönerTrainer_Endabgabe.crc2);
        drawCounter(new DönerTrainer_Endabgabe.Vector(0, 300), new DönerTrainer_Endabgabe.Vector(900, 300));
    }
    function drawCounter(_position, _size) {
        console.log(drawCounter);
    }
})(DönerTrainer_Endabgabe || (DönerTrainer_Endabgabe = {}));
//# sourceMappingURL=Main.js.map