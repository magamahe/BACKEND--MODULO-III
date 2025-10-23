export const persona = {
  nombre: "María",
  edad: 28,
  ciudad: "Buenos Aires"
};

//for...in recorre las propiedades (claves) del objeto.
//key es cada nombre de propiedad (nombre, edad, ciudad).
for (const key in persona) {
  //persona[key as keyof typeof persona] usa una aserción de tipo para que TypeScript sepa que la clave pertenece al objeto persona.
  console.log(`${key}: ${persona[key as keyof typeof persona]}`);
}
