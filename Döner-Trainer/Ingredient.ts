namespace DönerTrainer_Endabgabe {
    export abstract class Ingredient {

        public position: Vector;
        public containerAmount: number;
        public size: Vector;
        public amount: number;
        public foodAmount: number;
        protected type: string;


        constructor(_foodAmount: number, _amount?: number, _position?: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);
            this.foodAmount = _foodAmount;
            this.amount = _amount;
        }

        public abstract draw(): void;


    }
}