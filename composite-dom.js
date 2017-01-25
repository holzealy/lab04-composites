//composite class
var DomElement = (function () {
    function DomElement(element) {
        this.element = element;
        this.children = [];
    }
    DomElement.prototype.add = function (element) {
        this.children.push(element);
    };
    DomElement.prototype.print = function () {
        console.log('<' + this.element + '>');
        this.children.forEach(function (child) {
            child.print();
        });
        console.log('</' + this.element + '>');
    };
    return DomElement;
}());
//leaf class
var TextNode = (function () {
    function TextNode(text) {
        this.text = text;
    }
    TextNode.prototype.print = function () {
        console.log(this.text);
    };
    return TextNode;
}());
var html = new DomElement("html");
var div = new DomElement("div");
var p1 = new DomElement("p");
var text1 = new TextNode("Hi, I am a TextNode being printed!");
p1.add(text1);
div.add(p1);
var p2 = new DomElement("p");
var text2 = new TextNode("TextNode == leaf");
p2.add(text2);
div.add(p2);
html.add(div);
html.print();
