const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');
const seed  = require('../lib/data-helpers/seed');
const Movie = require('../lib/models/Movie');
const Review = require('../lib/models/Review');

describe('seed functions', () => {
  beforeAll(async() => {
    const uri = await mongod.getUri();
    return connect(uri);
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(async() => {
    await mongoose.connection.close();
    return mongod.stop();
  });

  it('it confirms that seed function has seeded the database with 5 movies by default', async() => {
    await seed();
    const result = await Movie.find();
    expect(result).toHaveLength(5);
  });

  it('it confirms the seed function has seeded the database with 100 reviews by default', async() => {
    await seed();
    const result = await Review.find();
    expect(result).toHaveLength(100);
  });

  it('it confirms the seed function has seeded the database with movies based on the input', async() => {
    const seedObject = {
      movieAmount: 10,
      reviewAmount: 50
    };

    await seed(seedObject);

    const movieResult = await Movie.find();
    const reviewResult = await Review.find();

    expect(movieResult).toHaveLength(10);
    expect(reviewResult).toHaveLength(50);
  });
});
