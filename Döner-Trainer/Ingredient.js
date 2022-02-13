"use strict";
var DönerTrainer_Endabgabe;
(function (DönerTrainer_Endabgabe) {
    class Ingredient {
        position;
        containerAmount;
        size;
        amount;
        foodAmount;
        type;
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new DönerTrainer_Endabgabe.Vector(0, 0);
        }
    }
    DönerTrainer_Endabgabe.Ingredient = Ingredient;
})(DönerTrainer_Endabgabe || (DönerTrainer_Endabgabe = {}));
//# sourceMappingURL=Ingredient.js.map