import { getAnosDeExperiencia } from './AnosDeExperiencia';

describe('Experiencia', () => {
  describe('anosDeExperiencia()', () => {
    it('should return the number expected when passed as a parameter the value two thousand and ten ', () => {
      const anoInicial = 2010;
      const expected = new Date().getFullYear() - anoInicial;
      const result = getAnosDeExperiencia(anoInicial);
      expect(result).toEqual(expected);
    });

    it('should not return the number expected when passed as a parameter the value two thousand and eleven', () => {
      const anoInicial = 2011;
      const expected = 5;
      const result = getAnosDeExperiencia(anoInicial);
      expect(result).not.toEqual(expected);
    });
  });
});
