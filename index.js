function sumItems(array) {
  let sum = 0
  array.forEach((element) => {
    if (Array.isArray(element)) {    
      sum += sumItems(element);
    } else {
      sum += element;
    }
    // console.log(sum)
  });
  return sum;
}


console.log(sumItems([1, 2, [[3, 4]], 7, 0]));

module.exports = sumItems;


