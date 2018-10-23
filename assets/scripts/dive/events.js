'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onShowDives = function (event) {
  console.log('showDIve is' + event.target)
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
  console.log(event)
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(event.target)
  console.log(event.target.id)
  console.log(event.target.parentNode.id)
  api.editDive(data)
    .then(api.showDive)
    .then(ui.showDiveSuccess)
    .then(ui.editDiveSuccess)
    .catch(ui.Fail)
}

const onDeleteDives = function (event) {
  console.log('onDeleteDives')
  event.preventDefault()

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
