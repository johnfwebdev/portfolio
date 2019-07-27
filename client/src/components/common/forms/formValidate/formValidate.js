export default class validation {
  constructor(providedValue) {
    this.value = providedValue
  }
  
  static nameValidate = (value) => {
    console.log(value, " :NameClass")
    return value ? true : false
  }

  static emailValidate = (value) => {
    console.log(value, " :EmailClass")
    const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return () => {
      if (expression.test(value)) {
        return true
      }
      return false
    }
  }

  static messageValidate = (value) => {
    console.log(value, " :MessageClass")
    return value ? true : false
  }
}