const assert = require('assert')

const choo = require('choo')
const shortid = require('shortid')
const pull = require('pull-stream')
const html = require('choo/html')

const outbound = require('./lib/notify').outbound
const api = require('./api')
const grid = require('./styles')
const headerRow = require('./headers')
const row = require('./row')
const gridData = require('./grid-data')
const gridKeyDown = require('./lib/grid-keydown')

function boxcar (anchorNode, opts) {
  const app = choo()
  opts = opts || {}
  assert.ok(opts.hasOwnProperty('columns'), 'You must supply a column config')
  const bid = opts.root || `boxcar-${shortid.generate()}`
  const model = gridData(bid, opts.columns, opts.data || [])

  if (typeof opts.notifier === 'function') {
    pull(outbound.listen(), pull.drain((evt) => opts.notifier(evt)))
  }

  app.model(model)
  app.router((route) => [
    route('/', boxcarMain)
  ])

  const tree = app.start({name: bid})
  anchorNode.appendChild(tree)
  return api

  function boxcarMain (state, prev, send) {
    const $main = html`
      <div
        tabindex="0"
        class="${grid}"
        onload=${(node) => node.focus()}
        onkeydown=${(evt) => gridKeyDown(evt, state[bid].inEdit, bid, send)}>
        <div class="${grid} .grid">
          <header>
           ${headerRow(state[bid].header)}
          </header>
          <div class="${grid} .scroller">
           ${state[bid].data.map((rowData, rowNumber) => row(state[bid], rowData, rowNumber, bid, send))}
          </div>
       </div>
      </div>`
    return $main
  }
}

module.exports = boxcar
