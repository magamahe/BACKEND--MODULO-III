function procesarObjeto<T extends Record<string, any>>(obj: T): T {
  const nuevoObj = { ...obj };

  for (const key in nuevoObj) {
    const valor = nuevoObj[key];

    if (typeof valor === "string") {
      nuevoObj[key] = (valor as string).toLowerCase() as any;
    } else if (typeof valor === "number") {
      nuevoObj[key] = (valor as number) ** 2 as any;
    } else if (typeof valor === "boolean") {
      nuevoObj[key] = !(valor as boolean) as any;
    }
  }

  return nuevoObj;
}

const ejemplo = {
  nombre: "GABRIELA",
  edad: 5,
  activa: true
};

console.log(procesarObjeto(ejemplo));
