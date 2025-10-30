class Compania {
    private nombreCompania: string;
    protected ingresosAnuales: number;

    constructor(nombreCompania:string, ingresosAnuales:number)
    {
        this.nombreCompania = nombreCompania;
        this.ingresosAnuales = ingresosAnuales;    
    }
}

class EmpresaTecnologia extends Compania{
    calcularDobleIngreso(): number {
        return this.ingresosAnuales *2;
    }
}

const empTec = new EmpresaTecnologia("pepe", 3400);
console.log('el doble del ingreso es: $ ',empTec.calcularDobleIngreso());