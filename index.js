function primeFinder(n) {
  const result = []
  for (let x = n + 1; result.length < 2; x++) {
    if (isPrime(x)) {
      result.push(x)
    }
  }
  return result
}

function isPrime(m) {
  const sqrt = Math.sqrt(m)
  for (let x = 2; x < sqrt; x++) {
    if (x == 2 || x % 2 != 0) {
      const D = m % x
      if (D === 0) {
        return false
      }
    }
  }
  return true
}

module.exports = primeFinder;
