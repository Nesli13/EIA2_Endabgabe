namespace DönerTrainer_Endabgabe {
    export class Ingredient {
        
        protected containerAmount: number;
        protected amount: number;
        protected position: Vector;

        constructor(_amount: number, _containerAmount: number,  _position: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);
            this.amount = _amount;
            this.containerAmount = _containerAmount;
        }

        public draw(): void {
            // console.log("");
        }


    }
}