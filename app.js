import chalk from 'chalk';

const log = console.log;

let joke = "Hva rimer på bilen? - Vinduene ...";
let words = joke.split(" ");

joke = "";
for (let n in words) { 
	let red = 63 + 32*random(0, 6);
	let green = 63 + 32*random(0, 6);
	let blue = 63 + 32*random(0, 6);
	joke = joke + chalk.rgb(red, green, blue).bold(words[n]) + " ";
}

log("\n\n\n\n\n");
log(joke);
log("\n\n\n\n\n");
 




function random(min, max) {
	return Math.floor(Math.random() * (max-min)) + min;
}