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

console.log(getTheTitles(books));  // ['Book','Book2']


//solution -> same but shorter
// const getTheTitles = function (array) {
//     return array.map((book) => book.title);
//   };


// Do not edit below this line
module.exports = getTheTitles;
