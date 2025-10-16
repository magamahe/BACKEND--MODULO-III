type Empleado = {
    nombre: string;
    salario: number;
};

function aumentarSalario(empleado: Empleado, porcentaje: number): number {
    empleado.salario += empleado.salario * (porcentaje / 100);
    return empleado.salario;
}

const empleado1: Empleado = { nombre: "Mario", salario: 50000 };
console.log("Ejercicio 7: Salario antes", empleado1.salario);
console.log("Ejercicio 7: Salario después", aumentarSalario(empleado1, 10)); // aumento 10%
