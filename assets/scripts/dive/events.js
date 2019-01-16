'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

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
  event.preventDefault()
  const diveId = $(event.target).closest('tr').data('id')
  const data = getFormFields(event.target)
  api.editDive(diveId, data)
    .then(api.showDive)
    .then(ui.showDiveSuccess)
    .then(ui.editDiveSuccess)
    .catch(ui.Fail)
}

const onDeleteDives = function (event) {
  event.preventDefault()
  const id = $(event.target).parent().data('id')
  if (confirm('Are you sure you want to delete this dive?')) {
    api.deleteDive(id)
      .then(api.showDive)
      .then(ui.showDiveSuccess)
      .then(ui.deleteDiveSuccess)
      .catch(ui.Fail)
  }
}

module.exports = {
  onNewDives,
  onShowDives,
  onEditDives,
  onDeleteDives
}
