// stringUtils.ts

// Devuelve el string con la primera letra en mayúscula
export function capitalize(str: string): string {
  if (str.length === 0) return '';
  return str[0].toUpperCase() + str.slice(1);
}

// Devuelve el string al revés
export function reverse(str: string): string {
  return str.split('').reverse().join('');
}
