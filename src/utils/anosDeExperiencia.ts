export function getAnosDeExperiencia(anoInicial: number): number {
  return new Date().getFullYear() - anoInicial;
}
