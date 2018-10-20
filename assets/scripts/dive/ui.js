'use strict'

const store = require('../store.js')

const newDiveSuccess = function (response) {
  $('#display-message').html('New dive created')
  $('#display-message').css('color', 'green')
  $('#display-message').removeClass('hidden')
  store.user = response.user
  $('#addDiveModal').attr('aria-hidden', 'false')
}

const Fail = function () {
  $('#display-message').html('Something went wrong, Please try again')
  $('#display-message').css('color', 'red')
  $('#display-message').removeClass('hidden')
}

module.exports = {
  newDiveSuccess,
  Fail
}
