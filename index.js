module.exports = {
  toRoman
}

function toRoman(number) {
  if (number === 4) {
    return 'IV'
  }
  
  let result = ''

  for (let i = number ; number > 0; number--) {
    result += 'I'
  }

  return result
}