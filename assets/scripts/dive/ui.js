'use strict'

const store = require('../store.js')
const showDivesTemplate = require('../templates/helpers/dive-list.handlebars')

const showDiveSuccess = function (diveLog) {
  const dives = diveLog.divelogs.filter(n => n.editable)
  const showDivesHtml = showDivesTemplate({ divelogs: dives })
  $('.content').html(showDivesHtml)
  console.log(dives)
  store.diveLogs = dives
  $('#diveMessage').html('Here are all your Dives!')
  $('#diveMessage').css('color', 'rgb(28, 173, 228)')
  $('#diveMessage').removeClass('hidden')
}

const newDiveSuccess = function (diveLog) {
  // this is not a diveLog, this is a divelog
  $('#diveMessage').html('New dive created this session!')
  $('#diveMessage').css('color', 'rgb(28, 173, 228)')
  $('#diveMessage').removeClass('hidden')
  $('#addDiveForm').trigger('reset')
  $('#addDiveModal').modal('toggle')
  // you are overwriting your data Incorrectly
  if (!store.user.diveLogs) {
    store.user.diveLogs = []
  }
  store.user.diveLogs.push(diveLog.divelog)
  const showDivesHtml = showDivesTemplate({divelogs: store.user.diveLogs})
  $('.content').html(showDivesHtml)
}

const editDiveSuccess = () => {
  $('#diveMessage').html('Dive sucessfully edited')
  $('#diveMessage').css('color', 'rgb(28, 173, 228)')
  $('#diveMessage').removeClass('hidden')
  $('#editDiveModal').modal('toggle')
}

const deleteDiveSuccess = function () {
  $('#diveMessage').html('Sucessfully deleted the dive')
  $('#diveMessage').css('color', 'rgb(28, 173, 228)')
  $('#diveMessage').removeClass('hidden')
}

const Fail = function () {
  $('#diveMessage').html('Something went wrong, Please try again')
  $('#diveMessage').css('color', 'red')
  $('#diveMessage').removeClass('hidden')
}

module.exports = {
  newDiveSuccess,
  showDiveSuccess,
  editDiveSuccess,
  deleteDiveSuccess,
  Fail
}
