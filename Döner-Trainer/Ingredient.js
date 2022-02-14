"use strict";
var DönerTrainer_Endabgabe;
(function (DönerTrainer_Endabgabe) {
    class Ingredient {
        containerAmount;
        amount;
        position;
        constructor(_amount, _containerAmount, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new DönerTrainer_Endabgabe.Vector(0, 0);
            this.amount = _amount;
            this.containerAmount = _containerAmount;
        }
        draw() {
            // console.log("");
        }
    }
    DönerTrainer_Endabgabe.Ingredient = Ingredient;
})(DönerTrainer_Endabgabe || (DönerTrainer_Endabgabe = {}));
//# sourceMappingURL=Ingredient.js.map