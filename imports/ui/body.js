import { Template } from 'meteor/templating';
import { Words } from '../api/words.js';
import './word.js';
import './body.html';

// default state variables
var isBold = false;
var isItalic = false;
var isUnderline = false;
var color_in = "black";

//return all words currently in collection with their text attributes
Template.body.helpers({
  words() {
	return Words.find({});
  },
});

//events for all button clicking (colors, style, delete)
Template.body.events({
	'click #bold'(event) {
		isBold = !isBold;
	},
	'click #italic'(event) {
		isItalic = !isItalic;
	},
	'click #underline'(event) {
		isUnderline = !isUnderline;
	},
	'click #black'(event) {
		color_in = "black";
	},
	'click #red'(event) {
		color_in = "red";
	},
	'click #green'(event) {
		color_in = "green";
	},
	'click #blue'(event) {
		color_in = "blue";
	},
	'keyup .new-word': function(event) {
		if (event.which === 32) {
			//add word on spacebar keypress
			const target = event.currentTarget["0"];
			const text = event.currentTarget["0"].value;
			
			Words.insert({
				text,
				isBold,
				isItalic,
				isUnderline,
				color_in,
				createdAt: new Date(), //current time
			});

			target.value = '';
		}
	},
	'submit .new-word'(event) {
		// add word on submit (return key)
		// Prevent default browser form submit
		event.preventDefault();

		// Get value from form element
		const target = event.target;
		const text = target.text.value;

		// Insert a word into the collection
		Words.insert({
			text,
			isBold,
			isItalic,
			isUnderline,
			color_in,
			createdAt: new Date(), // current time
		});

		// Clear form
		target.text.value = '';
	},
	'click #clear'(event) {
		//call server side function to remove all words from collection
		Meteor.call('removeAllWords');
	},
});