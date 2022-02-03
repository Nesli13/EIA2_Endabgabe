"use strict";
var DönerTrainer_Endabgabe;
(function (DönerTrainer_Endabgabe) {
    class Ingredient {
        position;
        containerAmount;
        size;
        amount;
        type;
        constructor(_position, _amount, _containerAmount) {
            if (_position)
                this.position = _position;
            else
                this.position = new DönerTrainer_Endabgabe.Vector(0, 0);
            this.containerAmount = _containerAmount;
            this.amount = _amount;
        }
    }
    DönerTrainer_Endabgabe.Ingredient = Ingredient;
})(DönerTrainer_Endabgabe || (DönerTrainer_Endabgabe = {}));
//# sourceMappingURL=Ingredient.js.map