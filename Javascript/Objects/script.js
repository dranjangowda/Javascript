const jonas = {
    firstName : "ranjan",
    lastName : "gowda",
    birthYear : 1996,
    job:"teacher",
    friends:["raj","rak","ram"],
    hasDriverLicense:false,
    // calcAge:function(birthYear){
    //     return 2023 - birthYear
    // }
    calcAge:function(){
        this.age = 2023 - this.birthYear
        return this.age
    },
    jonasSummary :function(){

        this.summary = `${this.firstName},${this.lastName}, ${this.hasDriverLicense ? "hasDriverlicense" : "dosent have driver license"} and he cannot drive`
        return this.summary
    }
}   

// console.log(jonas.calcAge(jonas['birthYear']))
// console.log(jonas.calcAge(jonas.birthYear))

console.log(jonas.calcAge())
console.log(jonas.jonasSummary())
console.log(jonas.summary)