namespace DönerTrainer_Endabgabe {
    export class Lahmacun extends Ingredient {
        constructor(_foodAmount: number, _amount?: number, _position?: Vector) {
            super(_foodAmount, _amount, _position);
        }

        public draw(): void {
            //flat bread
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "#BB7733";
            crc2.arc(85, -30, 40, -6, 2 * Math.PI);
            crc2.fill();

            //minced meat
            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "#800000";
            crc2.arc(85, -30, 30, -6, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.restore();


        }
    }
}