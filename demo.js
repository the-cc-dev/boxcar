const boxcar = require('./')
const shortid = require('shortid')

const header = [
  {cssClass: 'test1', id: 'test1', editorType: 'text', name: 'test 1'},
  {cssClass: 'test2', id: 'test2', editorType: 'text', name: 'test 2'},
  {cssClass: 'test3', id: 'test3', editorType: 'text', name: 'test 3'},
  {cssClass: 'test4', id: 'test4', editorType: 'text', name: 'test 4'},
  {cssClass: 'test5', id: 'test5', editorType: 'text', name: 'test 5'},
  {cssClass: 'test6', id: 'test6', editorType: 'text', name: 'test 6'}
]

const data = [
  {id: shortid.generate(), test1: 'i', test2: 'got', test3: 'a', test4: 'friend', test5: 'her', test6: 'name'},
  {id: shortid.generate(), test1: 'is', test2: 'boxcar', test3: 'cigarettes', test4: 'and', test5: 'beer', test6: 'in el sob'}
]

boxcar(document.body, {columns: header, data: data})