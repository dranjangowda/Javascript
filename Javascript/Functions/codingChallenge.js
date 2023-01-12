//create an arrow function calcAverage to calculate the avg of 3 scores

const calcAvg = (score1, score2, score3) => {
    const avg = (score1 + score2 + score3) / 3
    return avg
}

const checkWinner = (Avg1, Avg2) => {
    if (Avg1 > Avg2) {
        return "Dolphins"
    } else {
        return "Kolas"
    }
}

const Avg1 = calcAvg(44, 23, 71)
const Avg2 = calcAvg(65, 54, 49)
const winner = checkWinner(Avg1, Avg2)
console.log(winner)