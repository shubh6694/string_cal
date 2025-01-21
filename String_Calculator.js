function add(numbers){
    if(numbers === '') return 0;

    // return parseInt(numbers); //For Test 2

    // As numbers is a string , split it by comma and convert it to array of nums TEST 3
    // const nums = numbers.split(',').map(num => parseInt(num));  // TEST 3

    // const nums = numbers.split(/,|\n/).map(num => parseInt(num)); // TEST 5

    // TEST 6
    let delimiter = /,|\n/;
    let numString = numbers;
  
    if (numbers.startsWith('//')) {
      const delimiterEnd = numbers.indexOf('\n');
      delimiter = new RegExp(numbers.substring(2, delimiterEnd));
      numString = numbers.substring(delimiterEnd + 1);
    }

    const nums = numString.split(delimiter).map(Number);

    // TEST 7
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) throw new Error(`Negatives numers are not allowed: ${negatives.join(', ')}`);

    return nums.reduce((sum, num) => sum + num); // calculate the sum

}

module.exports = add;