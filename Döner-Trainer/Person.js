"use strict";
var DönerTrainer_Endabgabe;
(function (DönerTrainer_Endabgabe) {
    class Person {
        size;
        position;
        velocity;
        type;
        constructor(_position) {
            if (_position)
                this.position = _position.copy(); //neuen Vector mit den gleichen Werten
            else
                this.position = new DönerTrainer_Endabgabe.Vector(0, 0);
            this.velocity = new DönerTrainer_Endabgabe.Vector(0, 0);
            //this.velocity.random(100, 200);
        }
    }
    DönerTrainer_Endabgabe.Person = Person;
})(DönerTrainer_Endabgabe || (DönerTrainer_Endabgabe = {}));
//# sourceMappingURL=Person.js.map