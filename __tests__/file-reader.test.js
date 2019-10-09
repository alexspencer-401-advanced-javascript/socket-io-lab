const readFile = require('../file-reader');

describe('file reader teste', () => {
  it('writes a file', () => {
    const text = 'this is an example string'
    const newFile = readFile(text);
    expect(newFile).toEqual({});
  })
})