class Flor{
    describir() : void{
        console.log("Soy una flor");
    }
}

class Rosa extends Flor{
    describir(): void{
        console.log("Soy una rosa");
    }
}

class Girasol extends Flor{
    describir() : void {
        console.log("Soy un girasol");
    }
}

const flor1 = new Flor();
const rosa1 = new Rosa();
const girasol1 = new Girasol();

flor1.describir();
rosa1.describir();
girasol1.describir();