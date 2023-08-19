/* eslint-disable jest/no-identical-title */
import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
});

describe('ConvertPLNtoUSD', () => {
    it('should return NaN when input is text', () => {
        expect(convertPLNToUSD('one')).toBeNaN();
        expect(convertPLNToUSD('abc')).toBeNaN();
        expect(convertPLNToUSD('1')).toBeNaN();
        expect(convertPLNToUSD('-341')).toBeNaN();
      });
});

describe('ConvertPLNtoUSD', () => {
    it('should return NaN when input is empty', () => {
        expect(convertPLNToUSD('')).toBeNaN();
        expect(convertPLNToUSD()).toBeNaN();
      });
});

describe('ConvertPLNtoUSD', () => {
    it('should return NaN when input is an empty string', () => {
        expect(convertPLNToUSD('')).toBeNaN();
        expect(convertPLNToUSD()).toBeNaN();
    });
});

describe('ConvertPLNtoUSD', () => {
     it('should return "Error" when input is different than number and string', () => {
        expect(convertPLNToUSD({})).toBe('Error');
        expect(convertPLNToUSD([])).toBe('Error');
        expect(convertPLNToUSD(null)).toBe('Error');
        expect(convertPLNToUSD(function() {})).toBe('Error');
    });
});

describe('ConvertPLNtoUSD', () => {
    it('should return zero when input is lower than zero', () => {
        expect(convertPLNToUSD(-1)).toBe('$0.00');
        expect(convertPLNToUSD(-2)).toBe('$0.00');
        expect(convertPLNToUSD(-56)).toBe('$0.00');
    });
});