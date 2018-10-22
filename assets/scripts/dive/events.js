'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onShowDives = function (event) {
  console.log('onShowDives')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.editDive(data)
    .then(ui.showDiveSuccess)
    .catch(ui.Fail)
}

const onNewDives = function (event) {
  console.log('onNewDives')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.createDive(data)
    .then(ui.newDiveSuccess)
    .catch(ui.Fail)
}

const onEditDives = function (event) {
  console.log('onEditDives')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.editDive(data)
    .then(ui.editDiveSuccess)
    .catch(ui.Fail)
}

const onDeleteDives = function (event) {
  console.log('onDeleteDives')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  if (confirm('Are you sure?')) {
    api.deleteDive(data)
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
