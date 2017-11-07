const _ = require('lodash');

let data = [ { name: 'john',
content: 'i really like tacos #yeaiknowitstuesday',
id: undefined },
{ name: 'Kate Dunderproto',
content: 'Fullstack Academy is cool! The instructors are just so cool. #fullstacklove #codedreams',
id: 0 },
{ name: 'Ben Docsreader',
content: 'Fullstack Academy is mindblowing! The instructors are just so breathtaking. #fullstacklove #codedreams',
id: 1 },
{ name: 'Kate Ternary',
content: 'Fullstack Academy is cool! The instructors are just so breathtaking. #fullstacklove #codedreams',
id: 2 },
{ name: 'Omri Stackson',
content: 'Fullstack Academy is sweet! The instructors are just so funny. #fullstacklove #codedreams',
id: 3 },
{ name: 'David Ternary',
content: 'Fullstack Academy is awesome! The instructors are just so awesome. #fullstacklove #codedreams',
id: 4 },
{ name: 'Geoff McQueue',
content: 'Fullstack Academy is wonderful! The instructors are just so sweet. #fullstacklove #codedreams',
id: 5 },
{ name: 'Kate Docsreader',
content: 'Fullstack Academy is cool! The instructors are just so funny. #fullstacklove #codedreams',
id: 6 },
{ name: 'Gabriel Docsreader',
content: 'Fullstack Academy is awesome! The instructors are just so amazing. #fullstacklove #codedreams',
id: 7 },
{ name: 'Kate Stackson',
content: 'Fullstack Academy is wonderful! The instructors are just so sweet. #fullstacklove #codedreams',
id: 8 },
{ name: 'Emily Ternary',
content: 'Fullstack Academy is sweet! The instructors are just so cool. #fullstacklove #codedreams',
id: 9 } ];

function add (name, content, id) {
  data.push({ name: name, content: content, id: id });
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };

// const randArrayEl = function(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// };

// add('john', 'i really like tacos #yeaiknowitstuesday')

// const getFakeName = function() {
//   const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
//   const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
//   return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
// };

// const getFakeTweet = function() {
//   const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
//   return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
// };

// for (let i = 0; i < 10; i++) {
//   module.exports.add( getFakeName(), getFakeTweet(), i );
// }

// add('bryan', 'im writting this right now');
// console.log(find({'name':'bryan'}));
console.log(data);
