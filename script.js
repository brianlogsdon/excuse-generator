
let changeText=()=>{
    
//arrays of random words
let adjective=['My crazy ', 'My stupid ', 'My sick ', 'My old ', 'My new ']
let who = ['computer ','girlfriend ','dog ','car ', 'bike '];
let what = ['fell down the stairs ','drowned ','exploded ','got eaten ', 'left '];
let when = ['yesterday.','like 5 minutes ago.','during the superbowl.','while I was eating.','while I was sleeping.'];

//random numbers
let x = Math.floor(Math.random()*adjective.length);
let y = Math.floor(Math.random()*who.length);
let z = Math.floor(Math.random()*what.length);
let q = Math.floor(Math.random()*when.length);

//concatenate
let newP = adjective[x]+ who[y] + what[z] + when[q];

//update html
document.getElementById('excuse').innerHTML = newP;

var buttons = document.getElementById('excuse-btn');

};
