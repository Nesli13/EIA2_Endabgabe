namespace DönerTrainer_Endabgabe {
    export abstract class Ingredient {

        public position: Vector;
        public containerAmount: number;
        public size: Vector;
        public amount: number;
        protected type: string;
    
        constructor(_position: Vector, _amount: number, _containerAmount: number) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);
           
            this.containerAmount = _containerAmount;
            this.amount = _amount;
        }

        public abstract draw(): void;


    }
}