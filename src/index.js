module.exports = function toReadable (number) {
  let ones = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
  let tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety']
  
  if (number === 0) return 'zero'
  if (number < 20) return ones[number]

  let digit = number % 10
  if (number < 100) {
    return tens[Math.floor(number / 10)] + (digit ? ' ' + ones[digit] : '')
  }
  if (number < 1000) {
    return ones[Math.floor(number / 100)] + ' hundred' + (number % 100 === 0 ? '' : ' ' + toReadable(number % 100))
  }
  //return toReadable(Math.floor(number % 1000)) + ' thousand' + (number % 1000 !== 0 ? ' ' + toReadable(number % 1000) : '')
}
