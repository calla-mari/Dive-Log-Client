'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const onPassChange = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.passChange(data)
    .then(ui.passChangeSuccess)
    .catch(ui.passChangeFail)
}

const onLogOut = function (event) {
  api.logOut()
    .then(ui.logOut)
    .catch(ui.logOutFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onPassChange,
  onLogOut
}
