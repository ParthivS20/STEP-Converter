import { getInput } from '@actions/core'
import * as fs from 'fs'

if (!fs.existsSync('docs')) {
  fs.mkdirSync('docs')
}

const outFiles = getInput('out-files', { required: true }).split(/\r\n|\r|\n/g)
console.log(outFiles)