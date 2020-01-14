function giveCompliment(name) {
    let compliments= ['great', 'awesome', 'handsome', 'smart', 'amazing', 'super', 'genius', 'cool', 'good', 'badass']
    let random=Math.random();
    let i=Math.floor(random*10);
    console.log(`You are ${compliments[i]}, ${name}`);
}

for (let j=1; j<=3; j++){
giveCompliment('Manos');
}