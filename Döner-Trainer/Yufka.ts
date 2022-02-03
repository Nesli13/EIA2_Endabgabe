namespace DönerTrainer_Endabgabe {
    export class Yufka extends Ingredient {
        constructor(_position: Vector, _amount: number, _containerAmount: number, _type: string, _size: Vector) {
            super(_position, _amount, _containerAmount, _type, _size);
        }
        public draw(): void {


            // meat
            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "#800000";
            crc2.arc(40, 41, 11, 0, 2 * Math.PI);
            crc2.fill();

            // meat
            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "#800000";
            crc2.arc(110, 41, 11, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //yufka
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "#bfa290";
            crc2.fillRect(0, 0, 70, 23);
            crc2.fill();
            crc2.restore();




        }
    }
}