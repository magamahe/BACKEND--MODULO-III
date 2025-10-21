// geometry.ts

// Namespace Geometry
export namespace Geometry {
  // Área de un círculo
  export function areaOfCircle(radius: number): number {
    return Math.PI * radius * radius;
  }

  // Área de un cuadrado
  export function areaOfSquare(side: number): number {
    return side * side;
  }
}

