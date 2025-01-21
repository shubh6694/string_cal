function add(numbers){
    if(numbers === '') return 0;

    // return parseInt(numbers); //For Test 2

    // As numbers is a string , split it by comma and convert it to array of nums
    const nums = numbers.split(',').map(num => parseInt(num));
    return nums.reduce((sum, num) => sum + num); // calculate the sum

}

module.exports = add;