namespace DönerTrainer_Endabgabe {
    export class Customer extends Person {

        constructor(_position?: Vector, _size?: Vector) {
            super(_position);
            

        }

        public draw(): void {
            //happy Customer
            //body
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "#b0E0E6";
            crc2.arc(85, 25, 35, 0, 2 * Math.PI);
            crc2.fill();

            //head
            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "#FFEFd5";
            crc2.arc(85, -30, 25, -6, 2 * Math.PI);
            crc2.fill();

            //eye
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(73, -30, 4, 0, 2 * Math.PI);
            crc2.arc(93, -30, 4, 0, 2 * Math.PI);
            crc2.fill();

            //mouth
            crc2.beginPath();
            crc2.arc(83, -17, 10, 0, Math.PI, false);
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.stroke();

            //arm
            crc2.beginPath();
            crc2.fillStyle = "#FFEFd5";
            crc2.arc(63, 20, 7, 0, 2 * Math.PI);
            crc2.arc(105, 20, 7, 0, 2 * Math.PI);
            crc2.fill();

            //feet
            crc2.beginPath();
            crc2.fillStyle = "#BC8F8F";
            crc2.arc(70, 60, 8, 0, 2 * Math.PI);
            crc2.arc(95, 60, 8, 0, 2 * Math.PI);
            crc2.fill();

            //hair
            crc2.beginPath();
            crc2.moveTo(70, -55);
            crc2.lineTo(70, -40);
            crc2.moveTo(75, -55);
            crc2.lineTo(75, -40);
            crc2.moveTo(80, -55);
            crc2.lineTo(80, -40);
            crc2.moveTo(85, -55);
            crc2.lineTo(85, -40);
            crc2.moveTo(90, -55);
            crc2.lineTo(90, -40);
            crc2.moveTo(95, -55);
            crc2.lineTo(95, -40);
            crc2.moveTo(100, -55);
            crc2.lineTo(100, -40);
            crc2.closePath();
            crc2.stroke();
            crc2.save();
            crc2.restore();
        }
        public drawImpatientCustomer(_position: Vector): void {
            //impatient Customer
            //body
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "#b0E0E6";
            crc2.arc(85, 25, 35, 0, 2 * Math.PI);
            crc2.fill();


            //head
            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "#FFEFd5";
            crc2.arc(85, -30, 25, -6, 2 * Math.PI);
            crc2.fill();

            //eye
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(73, -30, 3.5, 0, 2 * Math.PI);
            crc2.arc(93, -30, 3.5, 0, 2 * Math.PI);
            crc2.fill();

            //mouth
            crc2.beginPath();
            crc2.moveTo(71, -15);
            crc2.lineTo(100, -16);
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.stroke();

            //arm
            crc2.beginPath();
            crc2.fillStyle = "#FFEFd5";
            crc2.arc(63, 20, 7, 0, 2 * Math.PI);
            crc2.arc(105, 20, 7, 0, 2 * Math.PI);
            crc2.fill();

            //feet
            crc2.beginPath();
            crc2.fillStyle = "#BC8F8F";
            crc2.arc(70, 60, 8, 0, 2 * Math.PI);
            crc2.arc(95, 60, 8, 0, 2 * Math.PI);
            crc2.fill();

            //hair
            crc2.beginPath();
            crc2.moveTo(70, -55);
            crc2.lineTo(70, -40);
            crc2.moveTo(75, -55);
            crc2.lineTo(75, -40);
            crc2.moveTo(80, -55);
            crc2.lineTo(80, -40);
            crc2.moveTo(85, -55);
            crc2.lineTo(85, -40);
            crc2.moveTo(90, -55);
            crc2.lineTo(90, -40);
            crc2.moveTo(95, -55);
            crc2.lineTo(95, -40);
            crc2.moveTo(100, -55);
            crc2.lineTo(100, -40);
            crc2.closePath();
            crc2.stroke();
            crc2.restore();
            crc2.save();
            crc2.restore();


        }
        public drawMadCustomer(_position: Vector): void {
            //mad Customer
            //body
            crc2.beginPath();
            crc2.save();
            crc2.translate(_position.x - 650, _position.y - 400);
            crc2.fillStyle = "#b0E0E6";
            crc2.arc(85, 25, 35, 0, 2 * Math.PI);
            crc2.fill();

            //head
            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "#FFEFd5";
            crc2.arc(85, -30, 25, -6, 2 * Math.PI);
            crc2.fill();

            //eye
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(73, -30, 4, 0, 2 * Math.PI);
            crc2.arc(93, -30, 4, 0, 2 * Math.PI);
            crc2.fill();

            //mouth
            crc2.beginPath();
            crc2.arc(83, -13, 10, 0, Math.PI, true);
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.stroke();

            //arm
            crc2.beginPath();
            crc2.fillStyle = "#FFEFd5";
            crc2.arc(63, 20, 7, 0, 2 * Math.PI);
            crc2.arc(105, 20, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //feet
            crc2.beginPath();
            crc2.fillStyle = "#BC8F8F";
            crc2.arc(70, 60, 8, 0, 2 * Math.PI);
            crc2.arc(95, 60, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //hair
            crc2.beginPath();
            crc2.moveTo(70, -55);
            crc2.lineTo(70, -40);
            crc2.moveTo(75, -55);
            crc2.lineTo(75, -40);
            crc2.moveTo(80, -55);
            crc2.lineTo(80, -40);
            crc2.moveTo(85, -55);
            crc2.lineTo(85, -40);
            crc2.moveTo(90, -55);
            crc2.lineTo(90, -40);
            crc2.moveTo(95, -55);
            crc2.lineTo(95, -40);
            crc2.moveTo(100, -55);
            crc2.lineTo(100, -40);
            crc2.closePath();
            crc2.stroke();
            crc2.restore();
            crc2.save();
        }

        public mood(): void {
            console.log("mood");
        }
        public move(): void {
            console.log("mood");
        }
        /*public talk(_order: string) {
            let döner_kebap: string[] = ["flatbread", "meat"];
            let lahmacun: string[] = ["flatbread", "meat"];
            let yufka: string[] = ["flatbread", "minced meat"];
            let word: string[] = ["with", "without"];
            let topping: string[] = ["onions", "tomato", "salad", "red cabbage", "corn"];
            let sauce: string[] = ["garlic-sauce", "hot-sauce", "cocktailsauce"];
    
        
        }*/
    }
}