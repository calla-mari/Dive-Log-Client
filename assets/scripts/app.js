'use strict'

const authEvents = require('./auth/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('.newAccount').on('click', authEvents, () => {
    $('#sign-in-form').addClass('hidden')
    $('#sign-up-form').removeClass('hidden')
    $('.newAccount').addClass('hidden')
    $('.existingAcct').removeClass('hidden')
    $('#display-message').addClass('hidden')
    $('#sign-up-form').trigger('reset')
    $('#sign-in-form').trigger('reset')
  })
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('.existingAcct').on('click', authEvents, () => {
    $('#sign-in-form').removeClass('hidden')
    $('#sign-up-form').addClass('hidden')
    $('.existingAcct').addClass('hidden')
    $('.newAccount').removeClass('hidden')
    $('#display-message').addClass('hidden')
    $('#sign-up-form').trigger('reset')
    $('#sign-in-form').trigger('reset')
  })
  $('#passChange-form').on('submit', authEvents.onPassChange)
  $('#changePass').on('click', authEvents, () => {
    $('#passChange-form').removeClass('hidden')
    $('#changePass').addClass('hidden')
    $('#cancel').removeClass('hidden')
  })
  $('#changePass').on('click', authEvents, () => {
    $('#display-message').addClass('hidden')
    $('#changePass').addClass('hidden')
  })
  $('#logOut').on('click', authEvents.onLogOut)
  $('#logOut').on('click', authEvents, () => {
    $('#passChange-form').trigger('reset')
  })
})
