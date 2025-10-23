let date: any = "123";
//Doble aserción: primero se convierte a unknown, luego a number.
let numeroConvertido: number = (<number><unknown>date);

console.log(`Número convertido: ${numeroConvertido}`);
