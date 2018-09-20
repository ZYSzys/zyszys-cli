#!/usr/bin/env node
'use strict'

const path = require('path')
const meow = require('meow')
const termImg = require('term-img')
const importJsx = require('import-jsx')
const { h, render } = require('ink')

const ui = importJsx('./ui')

meow(`
  Usage
    $ zyszys
`)

termImg(path.join(__dirname, 'avatar.jpeg'))

render(h(ui))
