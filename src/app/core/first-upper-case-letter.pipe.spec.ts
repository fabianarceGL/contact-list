import { FirstUpperCaseLetterPipe } from './first-upper-case-letter.pipe';

describe('FirstUpperCaseLetterPipe', () => {
  it('should capitalize correctly', () => {
    const pipe = new FirstUpperCaseLetterPipe();
    expect(pipe.transform('fAbiAn')).toBe('Fabian');
  });
});
