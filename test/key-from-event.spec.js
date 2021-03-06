const test = require('tape')
const keyFromEvent = require('../lib/key-from-event')
const createEvent = require('./create-key-event')

test('keys', (t) => {
  t.equal(keyFromEvent(createEvent('keydown', 'Tab', {shift: true})), 'ShiftTab', 'got key back')
  t.equal(keyFromEvent(createEvent('keydown', 'Tab', {ctrl: true})), 'CtrlTab', 'got key back')
  t.equal(keyFromEvent(createEvent('keydown', 'Tab', {alt: true})), 'AltTab', 'got key back')
  t.equal(keyFromEvent(createEvent('keydown', 'Tab', {meta: true})), 'MetaTab', 'got key back')
  t.equal(keyFromEvent(createEvent('keydown', 'Esc')), 'Escape', 'got key back')
  t.equal(keyFromEvent(createEvent('keydown', 'Left')), 'ArrowLeft', 'got key back')
  t.equal(keyFromEvent(createEvent('keydown', 'Right')), 'ArrowRight', 'got key back')
  t.equal(keyFromEvent(createEvent('keydown', 'Up')), 'ArrowUp', 'got key back')
  t.equal(keyFromEvent(createEvent('keydown', 'Down')), 'ArrowDown', 'got key back')
  t.equal(keyFromEvent(createEvent('keydown', 'Del')), 'Delete', 'got key back')
  t.equal(keyFromEvent(createEvent('keydown', 'U+0009')), 'Tab', 'got key back')
  t.equal(keyFromEvent(createEvent('keydown', 'U+001B')), 'Escape', 'got key back')
  t.equal(keyFromEvent(createEvent('keydown', 'U+0008')), 'Delete', 'got key back')
  t.equal(keyFromEvent(createEvent('keydown', 'A')), 'a', 'got key back')
  t.equal(keyFromEvent(createEvent('keydown', 'U+0041')), 'a', 'got key back')
  t.equal(keyFromEvent(createEvent('keydown', 'U+0002')), '\x02', 'got key back')
  t.equal(keyFromEvent(createEvent('keydown', 'A', {shift: true})), 'A', 'got key back')
  t.end()
})
