namespace DönerTrainer_Endabgabe {
    export abstract class Person {
        public size: Vector;
        public position: Vector;
        public velocity: Vector;
        protected type: string;
        

        constructor(_position: Vector) {
            if (_position)
                this.position = _position.copy(); //neuen Vector mit den gleichen Werten
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

        }
        public abstract mood(): void;
        public abstract move(): void;
        public abstract draw(): void;
    }
}