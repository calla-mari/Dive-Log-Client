'use strict'

const store = require('../store.js')
const api = require('./api.js')

const signInSuccess = function (response) {
  $('#display-message').html('Welcome! Please choose what you would like to do.')
  $('#display-message').css('color', 'rgb(28, 173, 228)')
  +++++++

  $('#display-message').removeClass('hidden')
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#sign-in-form').addClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#logOut').removeClass('hidden')
  $('#changePass').removeClass('hidden')
  $('.newAccount').addClass('hidden')
  $('.existingAcct').addClass('hidden')
  $('.dives').removeClass('hidden')
  $('[data-toggle="tooltip"]').tooltip()
  $('.mask').removeClass('large')
  $('.mask').addClass('small')
  $('#header').removeClass('hidden')
}

const signInFail = function () {
  $('#display-message').html('Incorrect Email or Password')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
  $('#display-message').removeClass('hidden')
}

const signUpSuccess = function () {
  $('#display-message').html('Thank you for signing up! Please sign in to start loggin dives')
  $('#display-message').css('color', 'rgb(28, 173, 228)')
  $('#display-message').removeClass('hidden')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#1stStep').addClass('hidden')
  $('#2ndStep').removeClass('hidden')
  $('.existingAcct').addClass('hidden')
}

const signUpFail = function () {
  $('#display-message').html('Something went wrong, Please try again')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
  $('#display-message').removeClass('hidden')
}

const passChangeSuccess = function () {
  $('#display-message').html('Password Changed!')
  $('#display-message').css('color', 'rgb(28, 173, 228)')
  $('#passChange-form').trigger('reset')
  $('#changePass').removeClass('hidden')
  $('#display-message').removeClass('hidden')
  $('#passChange-form').addClass('hidden')
  $('#cancel').addClass('hidden')
  $('.dives').removeClass('hidden')
  $('#header').removeClass('hidden')
}

const passChangeFail = function () {
  $('#display-message').html('Incorrect Password')
  $('#display-message').css('color', 'red')
  $('#passChange-form').trigger('reset')
  $('#display-message').removeClass('hidden')
}

const logOut = function () {
  $('#sign-in-form').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#passChange-form').addClass('hidden')
  $('#logOut').addClass('hidden')
  $('#changePass').addClass('hidden')
  $('#1stStep').removeClass('hidden')
  $('#2ndStep').addClass('hidden')
  $('#display-message').html('Sucessfully Logged Out!')
  $('#display-message').css('color', 'rgb(28, 173, 228)')
  $('#display-message').removeClass('hidden')
  $('.newAccount').removeClass('hidden')
  $('#cancel').addClass('hidden')
  $('#passChange-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('.dives').addClass('hidden')
  $('.mask').addClass('large')
  $('.mask').removeClass('small')
  $('#header').addClass('hidden')
  $('.content').addClass('hidden')
  $('#diveMessage').addClass('hidden')
  store.dive = null
  store.diveLogs = null
}

const logOutFail = function () {
  $('#display-message').html('Log out unsuccessful, Please try again')
  $('#display-message').css('color', 'red')
  $('#display-message').removeClass('hidden')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  passChangeSuccess,
  passChangeFail,
  logOut,
  logOutFail
}
