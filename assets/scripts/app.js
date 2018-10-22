'use strict'

const authEvents = require('./auth/events.js')
const diveEvents = require('./dive/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Authentication
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
  $('#sign-in-form').on('click', authEvents, () => {
    $('#display-message').addClass('hidden')
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
    // $('.dives').removeClass('hidden')
    // })
    // $('#changePass').on('click', authEvents, () => {
    // $('#changePass').addClass('hidden')
    $('#display-message').addClass('hidden')
    $('.dives').addClass('hidden')
    $('.container').addClass('hidden')
  })
  $('#cancel').on('click', authEvents, () => {
    $('#passChange-form').addClass('hidden')
    $('#changePass').removeClass('hidden')
    $('#passChange-form').trigger('reset')
    $('#cancel').addClass('hidden')
    $('#display-message').html('Did NOT change password')
    $('#display-message').css('color', 'red')
    $('#display-message').removeClass('hidden')
    $('.dives').removeClass('hidden')
    $('.container').removeClass('hidden')
  })
  $('#logOut').on('click', authEvents.onLogOut)
  $('#logOut').on('click', authEvents, () => {
    $('#passChange-form').trigger('reset')
    $('.dives').addClass('hidden')
  })
  // User input
  $('#addDiveForm').on('submit', diveEvents.onNewDives)
  $('#addDiveForm').on('click', diveEvents, () => {
    // $('.dives').addClass('hidden')
    // $('#changePass').addClass('hidden')
    // $('#logOut').addClass('hidden')
    // $('#mainMenu').removeClass('hidden')
    $('#display-message').addClass('hidden')
    // $('.mask').removeClass('large')
    // $('.mask').addClass('small')
  })
})
