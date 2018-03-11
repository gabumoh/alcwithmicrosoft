class Dice {
    span: Element;
    constructor(span: Element) {
        this.span = span;
    }
}
class DiceRoller extends Dice {
    constructor(span: Element) {
        super(span);
        (this.span as HTMLElement).style.cssText = "border: 5px solid black; display: inline-block; height: 100px;  width: 100px; margin: 2px";   
    }
    rolleDice(diceValue: number): boolean {
        (this.span as HTMLElement).textContent = DiceValues[diceValue];
        return true;
    }
}

class DiceRollerButton {
  button: Element;
  constructor(button: Element) {
    this.button = button;
    (this.button as HTMLElement).style.cssText = "display: inline-block;";
    this.button.textContent = "Roll!";
    document.body.appendChild(this.button);
  }

  roll(diceCollection: Array<DiceRoller>) {
    diceCollection.forEach((item) => {
      item.span.textContent = DiceValues[getRandomIntInclusive(1, 6)];
    });
  }
}

enum DiceValues {
    one = 1,
    two,
    three,
    four,
    five,
    six
}
interface DiceTypes {
    span: Element;
}
let Elements: Array<DiceTypes> = [];

let diceCollection: Array<DiceRoller> = [];

for (let index: number = 0; index < 5; index++) {
    Elements.push({
        'span': document.createElement('span'),
    });
}
let getRandomIntInclusive: Function = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
Elements.map((elem, index) => {
    let cube = new DiceRoller(elem.span);
    document.body.appendChild(elem.span);

    diceCollection.push(cube);
});

let diceRollerButton = new DiceRollerButton(document.createElement('button'));

(diceRollerButton.button as HTMLElement).onclick = (event): void => {
  diceRollerButton.roll(diceCollection);
}