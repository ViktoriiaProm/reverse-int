module.exports = function reverse (n) { 
    n=Math.abs(n);
      const result = [];
      while (n > 0) {
          const remainder = n % 10;
          n -= remainder;
          n = n / 10;
          result.push(remainder);
      }
      let sum = 0;
      for (let i = 0; i < result.length; i += 1) {
          sum = sum + result[i] * 10 ** (result.length - i - 1);
          
      }
      return sum;
  }

