class Card {
    constructor(text) {
      this.text = text;
    }
  }
  
class List {
  constructor(title) {
    this.title = title;
    this.cards = [];
  }

  addCard(text) {
    var card = new Card(text);
    this.cards.push(card);
  }
}

var list = new List('My first list');
list.addCard('My first card');

console.log(list);