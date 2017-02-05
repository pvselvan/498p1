import { Template } from 'meteor/templating';
 
import { Words } from '../api/words.js';
 
import './word.html';

//manipulate word elements after it is rendered
Template.word.rendered = function(){

	var element = $(".text");

	if(this.data.isBold) {
		element.addClass("bold");
	}
	if(this.data.isItalic) {
		element.addClass("italic");
	}
	if(this.data.isUnderline) {
		element.addClass("underline");
	}
	if(this.data.color_in === "green") {
		element.addClass("green");
	}
	if(this.data.color_in === "red") {
		element.addClass("red");
	}
	if(this.data.color_in === "blue") {
		element.addClass("blue");
	}
	if(this.data.color_in === "black") {
		element.addClass("black");
	}
	element.addClass(this.data._id);
	element.removeClass("text")
};