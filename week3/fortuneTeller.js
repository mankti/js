function tellFortune(numChild, name, location, job){
    console.log(`You will be a ${jobs[i]} in ${locations[j]}, and married to ${partnerNames[k]} with ${numChildren[l]} kids`)
}

const numChildren = [0, 1, 2, 3, 4];
const partnerNames = ['Manos', 'Giorgos', 'Nikos', 'Giannis', 'Thrasiboulas'];
const locations = ['Athens', 'Heraklio', 'Marseille', 'Paris', 'Madrid'];
const jobs = ['Biophysicist', 'model', 'politician', 'Teacher', 'journalist'];

let i = Math.floor(Math.random()*5);
let j = Math.floor(Math.random()*5);
let k = Math.floor(Math.random()*5);
let l = Math.floor(Math.random()*5);

tellFortune(numChildren[i], partnerNames[j], locations[k], jobs[l]);