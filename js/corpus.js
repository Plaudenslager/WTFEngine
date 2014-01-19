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
 
var templates = [
	"While we were playing @sport @place, I was @action, and I @error, and hurt my @bodypart",
	"We were watching @sport on TV, and I starting @action, and well, long story short, now my @bodypart hurts",
	"My friend was @action, and I wanted to show her how to do it right, but I @error and injured my @bodypart",
	"I think I need to learn how to play @sport @place without hurting my @bodypart every time"
];

var phrases = [
	"O.K., you're never going to believe this, but",
	"I know this sounds crazy that I did this again, but",
	"I know I'm not supposed to, but",
	"You know how today was supposed to be a resting day?  Well, it turns out that",
	"Do we still have medical insurance?  I am only asking because",
	"Don't tell my coach, but",
];

var labels = [
	"So anyway, thats why I have so many bags of ice",
	"Do you think I will still be able to play in tomorrow's game?",
	"I know, I know, you've told me a thousand times, blah, blah, blah",
	"So now I'm not sure I can get my cleats on",
	"So do you think I should tell my coach, or just see if it gets better?",
	"I'm not sure, but I may have also popped out one of my stiches"
];

/*
	Auto Generated from WTF.csv
*/

corpus = {};

corpus.sport		= ["softball","football","volleyball","wall-ball","dodge-ball","checkers","tic-tac-toe","basketball","soccer"]
corpus.place		= ["in the gym","on the playground","in the hallway","in the kitchen","at McDonalds","in my friends garage","on the roof"]
corpus.action		= ["running","throwing","swinging a bat","pitching","passing the ball","trying to win","trying to grab the ball"]
corpus.error		= ["fell","tripped","ran into a wall","crashed into my friend","got hit with the ball","hit myself","flipped upside down","heard something go snap","caught my foot in a crack"]
corpus.bodypart		= ["eye","knee","ankle","leg","ear","finger","big toe","neck","elbow","thumb","shoulder",]