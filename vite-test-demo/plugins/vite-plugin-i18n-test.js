export default {
  // 将load进来的代码块进一步的加工处理
  // code 是块的内容
  // id 是请求的URL
  transform (code, id) {
    console.log('code: ', code)
    console.log('id: ', id)
    if (/vue&type=i18n/.test(id)) {
      return `export default Comp => {
        Comp.i18n = ${code}
      }`
    }
    return null
  }
}