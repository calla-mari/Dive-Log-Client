'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store.js')
const config = require('../config.js')

const showDive = function (userData) {
  console.log(userData)
  return $.ajax({
    url: config.apiUrl + '/divelogs',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
    // data: userData
    data: {
      userId: store.user.id
      // divelog: userData.divelog
    }
  })
}

const createDive = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/divelogs',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data: {
      userId: store.user.id,
      divelog: userData.divelog
    }
  })
}

const editDive = function (userData) {
  console.log(userData)
  return $.ajax({
    url: config.apiUrl + `/divelogs/${userData.divelog.id}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: userData
  })
}

const deleteDive = function (diveId) {
  return $.ajax({
    url: config.apiUrl + `/divelogs/${diveId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE'
  })
}

module.exports = {
  createDive,
  showDive,
  editDive,
  deleteDive
  // signIn,
  // passChange,
  // logOut
}
