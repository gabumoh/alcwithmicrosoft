/// <reference path="jquery.d.ts" />

class Salutation {
    _salutation: string;
    constructor(message: string) {
        this._salutation = message;
    }
    Salutation(): string {
        return "Hello, " + this._salutation;
    }
}

var greeting : Salutation = new Salutation("Demo Person");

$('header').append(
  $('<h1>', {
      html: greeting.Salutation()
  })
);