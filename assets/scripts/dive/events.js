'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onShowDives = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showDive(data)
    // .then(console.log)
    .then(ui.showDiveSuccess)
    .catch(ui.Fail)
}

const onNewDives = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createDive(data)
    .then(ui.newDiveSuccess)
    .catch(ui.Fail)
}

const onEditDives = function (event) {
  console.log('onEditDives')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.editDive(data)
    .then(api.showDive)
    .then(ui.showDiveSuccess)
    .then(ui.editDiveSuccess)
    .catch(ui.Fail)
}

const onDeleteDives = function (event) {
  console.log('onDeleteDives')
  event.preventDefault()
  console.log(event)
  // console.log($(event.target))
  // console.log($(event.target).closest('tr'))
  // console.log($(event.target).closest('tr').find('#id'))
  const diveId = $(event.target).closest('tr').find('#id').text()
  console.log(diveId)
  api.deleteDive(diveId)
    .then(ui.deleteDiveSuccess)
    .catch(ui.Fail)
}

module.exports = {
  onNewDives,
  onShowDives,
  onEditDives,
  onDeleteDives
}
