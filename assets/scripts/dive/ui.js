'use strict'

const store = require('../store.js')
const showDivesTemplate = require('../templates/helpers/dive-list.handlebars')

const showDivesSuccess = function (userData) {
  // show all dives on main page
  console.log(userData)
  const showDivesHtml = showDivesTemplate({ divelogs: store.user.diveLogs })
  console.log(showDivesHtml)
  $('.content').html(showDivesHtml)
}

const newDiveSuccess = function (diveLog) {
  // this is not a diveLog, this is a divelog
  console.log('diveLog', diveLog)
  $('#display-message').html('New dive created')
  $('#display-message').css('color', 'green')
  $('#display-message').removeClass('hidden')
  // $('#addDiveModal').addClass('hidden')
  // $('#addDiveModal').removeClass('fade')
  // $('.modal').addClass('hidden')
  $('#addDiveForm').trigger('reset')
  $('#addDiveModal').modal('toggle')

  // $('#addDiveModal').attr('aria-hidden', 'true')

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

const editDiveSuccess = function (diveLog) {
  console.log('dive success')
  console.log('diveLog', diveLog)
  $('#display-message').html('Dive sucessfully edited')
  $('#display-message').css('color', 'green')
  $('#display-message').removeClass('hidden')
  $('#editDiveModal').modal('toggle')
}

const deleteDiveSuccess = function () {
  $('#display-message').html('Sucessfully deleted the dive')
  $('#display-message').css('color', 'green')
  $('#display-message').removeClass('hidden')
  $('#editDiveModal').modal('toggle')
}

const Fail = function () {
  $('#display-message').html('Something went wrong, Please try again')
  $('#display-message').css('color', 'red')
  $('#display-message').removeClass('hidden')
}

module.exports = {
  newDiveSuccess,
  showDivesSuccess,
  editDiveSuccess,
  deleteDiveSuccess,
  Fail
}
