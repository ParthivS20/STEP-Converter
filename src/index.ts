import { getInput } from '@actions/core'
import * as fs from 'fs'

if (!fs.existsSync('docs')) {
  fs.mkdirSync('docs')
}

//from action.yml, get inputs
const outFiles = getInput('out-files', { required: true }).split(/\r\n|\r|\n/g)
console.log(outFiles)