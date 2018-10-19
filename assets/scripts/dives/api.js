'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store.js')
const config = require('../config.js')

const createDive = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: userData
  })
}

const signIn = function (userData) {
  console.log(userData)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: userData
  })
}

const passChange = function (passwordData) {
  console.log(passwordData)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: passwordData
  })
}

const logOut = function (passwordData) {
  console.log(passwordData)
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE'
  })
}

module.exports = {
  signUp,
  signIn,
  passChange,
  logOut
}
