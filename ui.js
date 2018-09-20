'use strict'

const { h, Text } = require('ink')
const SelectInput = require('ink-select-input')
const opn = require('opn')

const open = url => opn(url, { wait: false })

const handleSelect = item => {
  if (item.url) {
    open(item.url)
  }

  if (item.action) {
    item.action()
  }
}

const items = [
  {
    label: 'Website',
    url: 'http://zyszys.top'
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/ZYSzys_'
  },
  {
    label: 'GitHub',
    url: 'https://github.com/ZYSzys'
  },
  {
    label: 'Resume',
    url: 'http://zyszys.top/web/Resume/'
  },
  {
    label: 'Quit',
    action () {
      process.exit()
    }
  }
]

module.exports = () => (
  <div>
    <br />
    <div>
      <Text>I'm a JavaScript developer, even enthusiast.</Text>
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
)
