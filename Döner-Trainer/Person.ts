namespace DönerTrainer_Endabgabe {
    export abstract class Person {

        public position: Vector;
        public velocity: Vector;

        constructor(_position: Vector, _velocity: Vector) {
            if (_position)
                this.position = _position.copy(); //neuen Vector mit den gleichen Werten
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            //this.velocity.random(100, 200);

        }
        public abstract move(_timeslice: number): void;
        public abstract draw(): void;
    }
}