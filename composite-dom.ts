interface IDomElement {
  print();
}

//composite class
class DomElement implements IDomElement {
  private element:string;
  private children:IDomElement[];
  constructor(element:string) {
    this.element = element;
    this.children = [];
  }

  add(element: IDomElement) {
    this.children.push(element);
  }

  print() {
    console.log('<' + this.element + '>');
    this.children.forEach(child => {
      child.print();
    });
    console.log('</' + this.element + '>');
  }
}

//leaf class
class TextNode implements IDomElement {
  private text: string;
  constructor(text:string) {
    this.text = text;
  }
  print() {
    console.log(this.text);
  }
}

let html = new DomElement("html");
let div = new DomElement("div");

let p1 = new DomElement("p");
let text1 = new TextNode("Hi, I am a TextNode being printed!");
p1.add(text1);
div.add(p1);

let p2 = new DomElement("p");
let text2 = new TextNode("TextNode == leaf");
p2.add(text2);
div.add(p2);

html.add(div);
html.print();