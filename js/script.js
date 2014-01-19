/*
 * WTF Engine
 * https://github.com/soulwire/WTFEngine
 *
 * Copyright 2011, Justin Windle
 * http://blog.soulwire.co.uk/
 * Code Licensed under the MIT licence.
 * https://github.com/soulwire/WTFEngine/blob/master/MIT-LICENSE.txt
 *
 * Concept based on WTFSIMFD
 * http://whatthefuckshouldimakefordinner.com/
 * by Zach Golden
 * http://www.zachgolden.com/
 *
 */

// variables

var dom = {};
var regex = /./;
var vowel = /\b(a)\b(\s+)?(((<[^>]+>)\s?)+)?(\s+)?([aeiou]|hou)/gim;

// init

function initialise() {
	// bind the click event to the update function
	dom.generate.click(function(){
	
		update();
		return false;
	});
	
	// generate the regex and call the update function
	regex = generateRegExp();
	update();
}

// update

function update() {

	dom.output.html(generateIdea());
	dom.output.hide();
	dom.output.fadeIn(500);
	
	setGenerateLabel();
}

// build regex from corpus

function generateRegExp() {

	var str = '';
	var arr = [];
	var tmp = "@(types)";
	
	// Get all the replaceable keywords from corpus, stick them into an array
	for(type in corpus) {
		arr.push(type);
	}
	
	// Construct regular expression in the form of '@(keyword1,keyword2,keyword3,...)'
	var exp = tmp.replace("types", arr.join('|'));
	
	return new RegExp(exp, "ig");
}

// generate idea

function generateIdea() {
	
	var type;
	var match;
	var index;
	var intro;
	var output;
	
	// Pick a template at random from the list
	var template = templates[(Math.random() * templates.length) | 0];
	
	var data = {};
	
	// Copy the items from corpus into data
	// We make a copy so that we can modify it later
	for(var prop in corpus) {
		data[prop] = corpus[prop].concat();
	}
	
	var result = regex.exec(template);
	
	while(result) {
	
		// get the keyword into type, and the full match '@keyword' into match
		type = result[1];
		match = result[0];
		
		// select the replacement word at random from the proper list
		// replace the '@keyword' in the template with the replacement word
		// and remove that replacement word from the list of possible words
		// this is useful if we want to use the same keyword twice,
		// and ensure we pull a different replacement word
		index = (Math.random() * data[type].length) | 0;
		template = template.replace(match, data[type].splice(index, 1)[0]);
		
		// reset the regex search index to search from the beginning
		// since we have replaced the keyword with the replacement word,
		// the next search should go to the next match
		// when the match fails, result will be null, and the while loop exits
		// the template variable now has the finished text
		regex.lastIndex = 0;
		result = regex.exec(template);
	}
	
	// Pick an intro phrase at random from the list
	var intro = phrases[(Math.random() * phrases.length) | 0];
	
	// Construct a definition list with the intro as the term,
	// and constructed text as the definition
	output = "<dl>";
	output += "<dt>" + intro + "</dt>";
	output += "<dd>" + template + "</dd>";
	output += "</dl>";
	
	return correctGrammar(output);
}

// correct grammar

function correctGrammar(input) {

	// change 'a' to 'an' when before a vowel (I know this is not not always true!)
	input = input.replace(vowel, "$1n$2$3$6$7");

	return input;
}

// set label

function setGenerateLabel() {

	var label = labels[(Math.random() * labels.length) | 0];
	dom.generate.text(label);
	
}

// ready

$(document).ready(function(){

	dom.output = $("#output");
	dom.generate = $("#generate");
	
	if(corpus) {
		initialise();
	} else {
		//console.log("corpus not found");
	}
	
});