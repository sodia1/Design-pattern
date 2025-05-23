interface Builder{
    producePartA(): void;
    producePartB(): void;
    producePartC(): void;

}

class ConcreteBuilder implements Builder{
    private product: Product1;

    constructor(){
        this.reset()
    }

    public reset(): void{
        this.product = new Product1();
    }

    public producePartA(): void {
        this.product.parts.push('PartA');
    }

    public producePartB(): void {
        this.product.parts.push('PartB');
    }

    public producePartC(): void {
        this.product.parts.push('PartC');
    }

    public getProduct(): Product1 {
        const result = this.product;
        this.reset();
        return result;
    }
}

class Product1{
    public parts: string[] = [];
    public listParts(): void{
        console.log(`Product Parts: ${this.parts.join(', ')}\n`)
    }
}

class Director{
    private builder: Builder;

    public setBuilder(builder: Builder){
        this.builder = builder;
    }

    public buildMVP(): void{
        this.builder.producePartA();
    }

    public buildFullFeatureProduct(): void{
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}

function clientCode(director: Director) {
    const builder = new ConcreteBuilder();
    director.setBuilder(builder);

    console.log('Standard basic product:');
    director.buildMVP();
    builder.getProduct().listParts();

    console.log('Standard full featured product:');
    director.buildFullFeatureProduct();
    builder.getProduct().listParts();

    // Remember, the Builder pattern can be used without a Director class.
    console.log('Custom product:');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);