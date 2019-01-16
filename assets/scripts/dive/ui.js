'use strict'

const store = require('../store.js')
const showDivesTemplate = require('../templates/helpers/dive-list.handlebars')

const showDiveSuccess = function (response) {
  $('.content').removeClass('hidden')
  const dives = response.divelogs.filter(n => n.editable)
  const showDivesHtml = showDivesTemplate({ divelogs: dives })
  $('.content').html(showDivesHtml)
  console.log(dives)
  store.diveLogs = dives
  if (dives.length === 0) {
    $('#diveMessage').html('You have no dives logged!')
    $('#diveMessage').css('color', 'rgb(28, 173, 228)')
    $('#diveMessage').removeClass('hidden')
  } else {
    $('#diveMessage').html('Here are all your Dives!')
    $('#diveMessage').css('color', 'rgb(28, 173, 228)')
    $('#diveMessage').removeClass('hidden')
  }
<<<<<<< HEAD
=======
  console.log(dives.date)
>>>>>>> v2
}

const newDiveSuccess = function (diveLog) {
  // this is not a diveLog, this is a divelog
  $('#diveMessage').html('New dive created this session!')
  $('#diveMessage').css('color', 'rgb(28, 173, 228)')
  $('#diveMessage').removeClass('hidden')
  $('#addDiveForm').trigger('reset')
  $('#addDiveModal').modal('toggle')
  $('.content').removeClass('hidden')
  // you are overwriting your data Incorrectly
<<<<<<< HEAD
//   if (!store.user.diveLogs) {
//     store.user.diveLogs = []
//   }
//   store.user.diveLogs.push(diveLog.divelog)
//   const showDivesHtml = showDivesTemplate({divelogs: store.user.diveLogs})
//   $('.content').html(showDivesHtml)
=======
  if (!store.user.diveLogs) {
    store.user.diveLogs = []
  }
  store.user.diveLogs.push(diveLog.divelog)
  const showDivesHtml = showDivesTemplate({divelogs: store.user.diveLogs})
  $('.content').html(showDivesHtml)
>>>>>>> v2
}

const editDiveSuccess = () => {
  $('#diveMessage').html('Dive sucessfully edited')
  $('#diveMessage').css('color', 'rgb(28, 173, 228)')
  $('#diveMessage').removeClass('hidden')
  $('#editDiveModal').modal('toggle')
  $('.content').removeClass('hidden')
}

const deleteDiveSuccess = function (diveLog) {
  $('#diveMessage').html('Sucessfully deleted the dive')
  $('#diveMessage').css('color', 'rgb(28, 173, 228)')
  $('#diveMessage').removeClass('hidden')
  $('.content').removeClass('hidden')
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
