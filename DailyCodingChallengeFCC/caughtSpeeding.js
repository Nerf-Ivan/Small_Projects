/**
 * Onjective:
 * Given an array of numbers representing the speed at which vehicles were observed traveling, 
 * and a number representing the speed limit, return an array with two items, the number of vehicles that were speeding, 
 * followed by the average amount beyond the speed limit of those vehicles.

If there were no vehicles speeding, return [0, 0].

 */

function speeding(speeds, limit) {

    let speeding = speeds.filter(n => n > limit);
    
    let totalSpeeding = speeding.length;

    let sum = speeding.reduce((total, current)=> {
        return total + (current - limit)
    }, 0)

    let averagSpeed = sum / speeding.length;
    
    if (totalSpeeding === 0)return [0, 0]
    return [totalSpeeding, averagSpeed]
}

/**
 * Test Cases
 */

console.log(speeding([50, 60, 55], 60))//[0, 0]
console.log(speeding([58, 50, 60, 55], 55))//[2, 4]
console.log(speeding([61, 81, 74, 88, 65, 71, 68], 70));//[4, 8.5]
console.log(speeding([100, 105, 95, 102], 100))//[2, 3.5]
console.log(speeding([40, 45, 44, 50, 112, 39], 55));//[1, 57]

