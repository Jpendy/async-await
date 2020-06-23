const { getCharacter, getManyCharacters } = require('./RickAndMorty');

jest.mock('superagent', () => ({
  get: () => {
    return Promise.resolve({
      body: 
          { 'id':1, 'name':'Rick Sanchez', 'status':'Alive', 'species':'Human', 'type':'', 'gender':'Male' },    
    });
  }
}));

describe('Rick and Morty functions', () => {
    
  it('it gets a character by id', async() => {

    const result = await getCharacter(1);

    expect(result).toEqual({
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human'
    });
  });


  it('it gets many characters from an array of ids', async() =>{
      
    const result = await getManyCharacters([1, 2, 3]);

    expect(result).toEqual([
      {
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human'
      },
      {
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human'
      },
      {
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human'
      }
    ]);
  });
});
