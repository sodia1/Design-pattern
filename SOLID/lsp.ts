// This principle states that every child class should be usable instead of its parent class without the need for changes.

class Bird{
    fly(): void{
        console.log('Bird is flying');
    }
}

class Duck extends Bird{
    fly(): void {
        console.log('Duck is flying');
    }
}
//wrong approach
// class Penguin extends Bird{
//     fly(): void {
//         throw new Error(`Penguin can't fly`);
//     }
// }

//right approach
class Penguin extends Bird{

}

const duck = new Duck();
console.log(duck.fly())

const penguin = new Penguin();
console.log(penguin.fly())