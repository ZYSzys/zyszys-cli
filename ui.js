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
    label: 'GitHub',
    url: 'https://github.com/ZYSzys'
  },
  {
    label: 'Resume',
    url: 'https://zyszys.github.io/web/Resume/'
  },
  {
    label: 'Profile',
    url: 'https://gatsby-j3xx4ozff.now.sh/'
  },
  {
    label: 'Website',
    url: 'https://zyszys.github.io'
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/ZYSzys_'
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
      <Text>I'm a ❤️  Node.js Enthusiast | 🧡  Open Sourcerer | 💛  continuous learner.</Text>
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
)
