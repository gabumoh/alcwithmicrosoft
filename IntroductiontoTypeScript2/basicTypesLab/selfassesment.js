var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dice = /** @class */ (function () {
    function Dice(span) {
        this.span = span;
    }
    return Dice;
}());
var DiceRoller = /** @class */ (function (_super) {
    __extends(DiceRoller, _super);
    function DiceRoller(span) {
        var _this = _super.call(this, span) || this;
        _this.span.style.cssText = "border: 5px solid black; display: inline-block; height: 100px;  width: 100px; margin: 2px";
        return _this;
    }
    DiceRoller.prototype.rolleDice = function (diceValue) {
        this.span.textContent = DiceValues[diceValue];
        return true;
    };
    return DiceRoller;
}(Dice));
var DiceRollerButton = /** @class */ (function () {
    function DiceRollerButton(button) {
        this.button = button;
        this.button.style.cssText = "display: inline-block;";
        this.button.textContent = "Roll!";
        document.body.appendChild(this.button);
    }
    DiceRollerButton.prototype.roll = function (diceCollection) {
        diceCollection.forEach(function (item) {
            item.span.textContent = DiceValues[getRandomIntInclusive(1, 6)];
        });
    };
    return DiceRollerButton;
}());
var DiceValues;
(function (DiceValues) {
    DiceValues[DiceValues["one"] = 1] = "one";
    DiceValues[DiceValues["two"] = 2] = "two";
    DiceValues[DiceValues["three"] = 3] = "three";
    DiceValues[DiceValues["four"] = 4] = "four";
    DiceValues[DiceValues["five"] = 5] = "five";
    DiceValues[DiceValues["six"] = 6] = "six";
})(DiceValues || (DiceValues = {}));
var Elements = [];
var diceCollection = [];
for (var index = 0; index < 5; index++) {
    Elements.push({
        'span': document.createElement('span')
    });
}
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
Elements.map(function (elem, index) {
    var cube = new DiceRoller(elem.span);
    document.body.appendChild(elem.span);
    diceCollection.push(cube);
});
var diceRollerButton = new DiceRollerButton(document.createElement('button'));
diceRollerButton.button.onclick = function (event) {
    diceRollerButton.roll(diceCollection);
};
