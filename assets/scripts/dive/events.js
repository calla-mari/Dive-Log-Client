'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onNewDives = function (event) {
  console.log('onNewDives')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createDive(data)
    .then(ui.newDiveSuccess)
    .catch(ui.Fail)
}
//
// const onSignIn = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.signIn(data)
//     .then(ui.signInSuccess)
//     .catch(ui.signInFail)
// }
//
// const onPassChange = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.passChange(data)
//     .then(ui.passChangeSuccess)
//     .catch(ui.passChangeFail)
// }
//
// const onLogOut = function (event) {
//   api.logOut()
//     .then(ui.logOut)
//     .catch(ui.logOutFail)
// }

module.exports = {
  onNewDives
}
