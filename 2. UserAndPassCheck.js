const usernameCheck = (username) => {
    let simbol = '@';

    if ((username.length <= 12) && (username.length >= 2) && (username[0].match(simbol))) {
            return true;
    }else {
    return false}
}

const passwordCheck = (password) => {
  	let huruf = /[a-z]/g;
    let simbol = /[-#@!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g;
    let number = /[0-9]/;

    if ((password.length == 6) && (password.match(number)) && !(password.match(huruf)) && !(password.match(simbol))) {
      return true
    }else {
    return false}
}

console.log('Output usernameCheck')
console.log(usernameCheck('@11111111111')?'Benar':'Salah')
console.log(usernameCheck('inisalah')?'Benar':'Salah')
console.log(usernameCheck('@benar')?'Benar':'Salah')
console.log('Output passwordCheck')
console.log(passwordCheck('123456')?'Benar':'Salah')
console.log(passwordCheck('a12O09')?'Benar':'Salah')
console.log(passwordCheck('12321@')?'Benar':'Salah')