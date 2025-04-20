/**
 * Prototype is a creational design pattern that allows cloning objects, even complex ones, 
 * without coupling to their specific classes.

All prototype classes should have a common interface that makes it possible to copy objects even 
if their concrete classes are unknown. Prototype objects can produce full 
copies since objects of the same class can access each other’s private fields.
 */

class Prototype{
    public primitive: any;
    public component: object;
    public circularReference: ComponentWithBackReference;

    public clone(): this{
        const clone = Object.create(this);
        clone.component = Object.create(this.component);
        clone.circularReference = {
            ...this.circularReference,
            prototype: {...this}
        }
        return clone;
    }
}


class ComponentWithBackReference{
    public prototype;
    constructor(prototype: Prototype){
        this.prototype = prototype;
    }
}