//create an object with full name,mass,height
//create a calcBmi method in both the objects
//store the value in a property and return it
//log to the console who has higher bmi together with their full name and respective bmi

const marks = {
    firstName : 'marks manson',
    mass :78,
    height:1.65,
    calcBmi : function(){
        this.marksBmi = this.mass/this.height ** 2
        return this.marksBmi
    }
}

const john = {
    firstName : "john jacob",
    mass:92,
    height:1.95,
    calcBmi : function(){
        this.johnBmi = this.mass / this.height **2
        return this.johnBmi
    }
}

let marksBmi = marks.calcBmi()
let johnBmi = john.calcBmi()


const higherBmi = marksBmi>johnBmi ? "mark has higher Bmi than john" : "john has higher bmi than mark"

console.log(higherBmi)
