namespace DönerTrainer_Endabgabe {
    export class Onion extends Ingredient {
        constructor(_foodAmount: number, _amount?: number, _position?: Vector) {
            super(_foodAmount, _amount, _position);
        }
        public draw(): void {
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "#FFD39B";
            crc2.arc(this.position.x + 165, this.position.y - 370, 15, 0, 2 * Math.PI);
            crc2.arc(this.position.x + 173, this.position.y - 380, 15, 0, 2 * Math.PI);
            crc2.arc(this.position.x + 175, this.position.y - 380, 15, 0, 2 * Math.PI);
            crc2.arc(this.position.x + 185, this.position.y - 370, 15, 0, 2 * Math.PI);
            crc2.arc(this.position.x + 188, this.position.y - 375, 15, 0, 2 * Math.PI);
            crc2.arc(this.position.x + 190, this.position.y - 370, 15, 0, 2 * Math.PI);
            crc2.arc(this.position.x + 175, this.position.y - 400, 15, 0, 2 * Math.PI);
            crc2.arc(this.position.x + 180, this.position.y - 400, 15, 0, 2 * Math.PI);
            crc2.arc(this.position.x + 193, this.position.y - 400, 15, 0, 2 * Math.PI);
            crc2.arc(this.position.x + 195, this.position.y - 400, 15, 0, 2 * Math.PI);
            crc2.arc(this.position.x + 199, this.position.y - 390, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.restore();


        }
    }
}