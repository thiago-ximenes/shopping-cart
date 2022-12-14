const fetchSimulator = require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

window.fetch = jest.fn(fetchSimulator);

describe('2 - Teste a função fecthItem', () => {
  it('Testa se a função fecthItem é um função', () => {
    expect(typeof fetchItem).toBe('function')
  });
  it('verifica se, ao chamar fetchItem com o argumento "MLB1615760527", a função fetch foi chamada', () => {
    fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled()
  });
  it('Testa sem, ao chamar a função fectchItem com o argumento do item "MLB1615760527", a função utiliza o endpoint indicado', () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527'
    expect(fetch).toHaveBeenCalledWith(endpoint)
  });
  it('Testa se, ao chamar a função fectchItem sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
  })
});
