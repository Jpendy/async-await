const Movie = require('../models/Movie');
const Review = require('../models/Review');
const chance = require('chance');


const seed = async input => {
  if(!input){
    const arr = await Promise.all([...Array(5)].map(() => {
      return Movie.create({
        title: chance.word({ length: 5 }),
        description: chance.sentence({ words: 10 }),
        studio: chance.word({ length: 8 })
      });  
    }));

    await Promise.all([...Array(100)].map(() => {
      return Review.create({
        movie: chance.pickone(arr).id,
        authorName: chance.name(),
        comment: chance.sentence({ words: 15 })
      });
    }));    
  }
  
  else {
    const arr = await Promise.all([...Array(input.movieAmount)].map(() => {
      return Movie.create({
        title: chance.word({ length: 5 }),
        description: chance.sentence({ words: 10 }),
        studio: chance.word({ length: 8 })
      });  
    }));
  
    await Promise.all([...Array(input.reviewAmount)].map(() => {
      return Review.create({
        movie: chance.pickone(arr).id,
        authorName: chance.name(),
        comment: chance.sentence({ words: 15 })
      });
    }));
  }
};

module.exports = seed;
