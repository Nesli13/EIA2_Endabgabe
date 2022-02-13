namespace DönerTrainer_Endabgabe {
    export  class Ingredient {

        public position: Vector;
        public containerAmount: number;
        public size: Vector;
        public amount: number;
        protected type: string;


        constructor( _amount?: number, _position?: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);
            this.amount = _amount;
        }

        public draw(): void {
           // console.log("");
        }


    }
}