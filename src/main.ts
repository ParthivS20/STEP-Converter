import { getInput } from '@actions/core'
import { exec } from '@actions/exec'
import * as fs from 'fs'

const FORMATS = ['sch_pdf', 'pcb_pdf', 'png', 'stl', 'step']

const outFiles = getInput('out-files', { required: true }).split(/\r\n|\r|\n/g)

let needMayo = false

outFiles.forEach((file) => {
  if (!FORMATS.includes(file)) {
    throw new Error(`Invalid out-file: ${file}`)
  }

  if (!needMayo && (file === 'step' || file === 'stl' || file === 'png')) {
    needMayo = true
    exec('sh', [`mayo.sh`]).then(() => {
        console.log("mayo installed")
    }).catch((error) => {
        console.error("mayo failed")
        throw error
    })
  }
})

const outDir = getInput('out-dir', { required: true })

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true })
}

