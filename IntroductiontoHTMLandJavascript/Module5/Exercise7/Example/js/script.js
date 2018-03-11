/// <reference path="jquery.d.ts" />
var Salutation = /** @class */ (function () {
    function Salutation(message) {
        this._salutation = message;
    }
    Salutation.prototype.Salutation = function () {
        return "Hello, " + this._salutation;
    };
    return Salutation;
}());
var greeting = new Salutation("Demo Person");
$('header').append($('<h1>', {
    html: greeting.Salutation()
}));
