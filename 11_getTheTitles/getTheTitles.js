const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
const getTheTitles = function(arr) {
    return arr.map((obj) => {
       return obj.title;
    });
};

console.log(getTheTitles(books));



// Do not edit below this line
module.exports = getTheTitles;
