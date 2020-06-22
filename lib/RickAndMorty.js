const request = require('superagent');

const getCharacter = async id => {
  const fetched = await request.get(`https://rickandmortyapi.com/api/character/${id}`);
  const { body } = fetched;
  return {
    name: body.name,
    status: body.status,
    species: body.species
  };
};

const getManyCharacters = idArr => {
  return Promise.all(
    idArr.map(id => getCharacter(id))
  );
};

module.exports = {
  getCharacter,
  getManyCharacters
};
