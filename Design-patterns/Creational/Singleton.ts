// Singleton is a creational design pattern that lets you ensure that a class has only one instance, 
// while providing a global access point to this instance.

class Singleton{
    static instance: Singleton;

    /**
     * This constructor will always be private to preven direct construction call with `new` keyword
     */
    private constructor(){

    }

    /**
     * The static getter that controls access to the singleton instance.
     *
     * This implementation allows you to extend the Singleton class while
     * keeping just one instance of each subclass around.
     */
    public static getInstance(): Singleton{
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}