
// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}
// Read the file and print its contents.
var fs = require('fs')
  , filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  var words = data.split('\n');
  words = words[0].split(' ');
  console.log('Jumlah semua kata: '+words.length);
  console.log('Jumlah kata yang unik dan jumlahnya masing-masing: ');
  var uniqueWords = countUniqueWords(words);

  for (i=0;i<uniqueWords.length;i++) {
    if (typeof uniqueWords[i] !== 'undefined') {
    console.log(uniqueWords[i].join(': ')); }
  }
  var countNumber = countNumbers(words);
  console.log('Ada '+countNumber.length+' angka: '+countNumber.join(' '));
  console.log('Jumlah semua angka: '+countNumber.reduce(function(a,b){return a+b}))
});

////////// main function

function countUniqueWords (input) {

  var counts = {};
  input.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });

  var number = [];
  var words = Object.keys(counts).map(function(e) {
    if (isNaN(Number(e))==false) {
      number.push(Number(e));
    } else {
      return [String(e), counts[e]];
    }
  });

  return (words);
}

function countNumbers (input) {
  var counts = {};
  input.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });

  var number = [];
  var words = Object.keys(counts).map(function(e) {
    if (isNaN(Number(e))==false) {
      number.push(Number(e));
    } else {

    }
  });

  return (number);
}
