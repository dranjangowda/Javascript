const jonasObj = {
    firstName  :'jonas',
    lastName : "mark",
    friends : ["rag","ksl","lsd"],
    hasDriversLicense:true,
    birthYear : 1996,
    calcAge :function(){
        return 2023 - this.birthYear
    }
}

const jonasArray = ["jonas","schmedtman",23,'teacher',['michel','peter','steven'],jonasObj.friends]



for(let i=0;i<jonasArray.length;i++){
    console.log(jonasArray[i])
}

const str = "adffjdhjhekjhkliilkjkhdoodoohuehfhisa"
const strArr = str.split("")
const vowelArray = []
const constantArr = []
for(let i=0;i<strArr.length;i++){
    if(strArr[i]=== "a" || strArr[i] === "e" || strArr[i] === 'i' || strArr[i]=== "o" || strArr[i]==='u') {
        vowelArray.push(strArr[i])
    
    }else{
        constantArr.push(strArr[i])
    }
        
    
}
console.log(vowelArray,constantArr)
console.log(str.length,vowelArray.length,constantArr.length)


//while loop
let rep =1;
while(rep <= 10){
console.log(`lifting weight repetition ${rep}`)
rep++
}

//example keep rolling a dice until we get 6 using while loop
let dice = Math.trunc(Math.random() * 6) +1
while(dice !== 6){
    console.log("keep rolling")
     dice = Math.trunc(Math.random() * 6) +1
}
console.log(dice)
// The Math.trunc() static method returns the integer part of a number by removing any fractional digits.