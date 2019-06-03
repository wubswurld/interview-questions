//sort all digits and add first two array items

function sortNumber(a, b) {
    return a - b;
  };
  
  function sumTwoSmallestNumbers(numbers) {  
      var num = numbers.sort(sortNumber);
      return (num[0] + num[1]);
      
  };