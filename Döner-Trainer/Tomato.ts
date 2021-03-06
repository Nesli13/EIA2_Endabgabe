namespace DönerTrainer_Endabgabe {
    export class Tomato extends Ingredient {

        constructor(_amount?: number, _containerAmount?: number, _position?: Vector) {
            super(_amount, _containerAmount, _position);
        }

        public draw(): void {
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "red";
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
            crc2.save();

        }
    }
}