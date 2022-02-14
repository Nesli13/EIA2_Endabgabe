namespace DönerTrainer_Endabgabe {
    export class Yufka extends Ingredient {

        constructor(_amount?: number, _containerAmount?: number, _position?: Vector) {
            super(_amount, _containerAmount, _position);
        }

        public draw(): void {

            // meat
            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "#800000";
            crc2.arc(-40, 21, 11, 0, 2 * Math.PI);
            crc2.fill();

            // meat
            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "#800000";
            crc2.arc(30, 21, 11, 0, 2 * Math.PI);
            crc2.fill();

            //yufka-bread
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "#bfa290";
            crc2.fillRect(0, 0, 70, 23);
            crc2.save();
            crc2.closePath();
            crc2.fill();
            crc2.restore();




        }
    }
}