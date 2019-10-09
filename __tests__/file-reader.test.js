jest.mock('../files', () => {
  return {
    readFile: jest.fn(),
    writeFile: jest.fn()
  };
});

const { readFile, writeFile } = require('../files')
const fileReader = require('../file-reader');
const fileWriter = require('../file-writer');

describe('file reader test', () => {
  it('reads a file', () => {
    const source = './example.txt';
    const fileContents = 'this is a fake file'
    readFile.mockResolvedValue(fileContents);

    return fileReader(source)
      .then(contents => {
        const readCalls = readFile.mock.calls;
        expect(contents).toBe(fileContents);
        expect(readCalls.length).toBe(1);
        expect(readCalls[0][0]).toBe(source);
      })
  })
})