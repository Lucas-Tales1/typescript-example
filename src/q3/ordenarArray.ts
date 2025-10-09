export const ordenarArrayDecrescente = (array: string[]): string[] => {
  return array.sort((a, b) => b.localeCompare(a));
};