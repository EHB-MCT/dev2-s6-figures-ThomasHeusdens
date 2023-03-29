"use strict";
import Figure from "./Figure.js";
//import Circle from './Circle.js';
import Rectangle from "./Rectangle.js";
//import Square from './Square.js';

const form = {
	changeSelect(e) {},
	init() {
		document.querySelector("#form").addEventListener("submit", this.sumbitForm);
	},
	inputElementsWithLabel(label, id) {},
	submitForm(e) {
		e.preventDefault();

		const rectangle = new Rectangle("rectangle", 20, 50);
		console.log(rectangle);

		document.querySelector("#results").innerHTML = rectangle.innerHtml;
	},
};

form.init();
