'use strict'

const store = require('../store.js')
const showDivesTemplate = require('../templates/helpers/dive-list.handlebars')

const showDivesSuccess = function (userData) {
  // show all dives on main page
  const showDivesHtml = showDivesTemplate({ divelogs: userData.divelog })
  console.log(showDivesHtml)
  $('.content').html(showDivesHtml)
}

const newDiveSuccess = function (diveLog) {
  // this is not a diveLog, this is a divelog
  console.log('diveLog', diveLog)
  $('#display-message').html('New dive created')
  $('#display-message').css('color', 'green')
  $('#display-message').removeClass('hidden')
  $('.Modal').addClass('hidden')
  $('#addDiveForm').trigger('reset')

  // store.user = diveLog.userId;

  // you are overwriting your data Incorrectly
  console.group('Incorrect data storing')
  console.log(store.user)
  if (!store.user.diveLogs) {
    store.user.diveLogs = []
  }
  // store.user.diveLogs.push(diveLog.divelog)
  store.user.diveLogs.push(diveLog.divelog)

  console.log(diveLog.divelog)
  const showDivesHtml = showDivesTemplate({divelogs: store.user.diveLogs})
  console.groupEnd('Incorrect data storing')
  // $('')
  // show new dive appended
  console.log(showDivesHtml)
  $('.content').html(showDivesHtml)

  // $('.table').append(store.user.divelogs)
  // $('#addDiveModal').attr('aria-hidden', 'false')
}

const Fail = function () {
  $('#display-message').html('Something went wrong, Please try again')
  $('#display-message').css('color', 'red')
  $('#display-message').removeClass('hidden')
}

module.exports = {
  newDiveSuccess,
  showDivesSuccess,
  Fail
}
