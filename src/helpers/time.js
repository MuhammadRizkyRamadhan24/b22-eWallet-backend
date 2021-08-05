exports.codeTransaction = (number) => {
  const date = new Date()
  const val = Math.floor(1000 + Math.random() * 900000)
  return `INV/PULSA/${date.getDate()}${date.getMonth() + 1}${date.getFullYear()}/${val}/${number}`
}