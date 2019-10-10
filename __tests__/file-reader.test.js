jest.mock('../file-reader', () => {
  return () => Promise.resolve('this is a fake file!');
});

jest.mock('../file-writer', () => {
  return () => Promise.resolve('this is a fake file!');
});

describe('file reader test', () => {

  const fileReader = require('../file-reader');
  const fileWriter = require('../file-writer');

  it('reads a file', () => {
    const source = './example.txt';

    return fileReader(source)
      .then(contents => {
        expect(contents).toEqual('this is a fake file!');
      })
  })

  it('writes a file', () => {
    const source = './example.txt';
    
    return fileWriter(source)
      .then(contents => {
        expect(contents).toEqual('this is a fake file!');
      })
  })
})