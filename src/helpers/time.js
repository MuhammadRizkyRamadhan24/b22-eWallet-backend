exports.codeTransaction = () => {
  const date = new Date()
  const val = Math.floor(1000 + Math.random() * 900000)
  return `INV/${date.getDate()}${date.getMonth() + 1}${date.getFullYear()}/${val}`
}