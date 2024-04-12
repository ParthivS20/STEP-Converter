import { getInput } from '@actions/core'
import { exec } from '@actions/exec'
import * as fs from 'fs'

const FORMATS = ['sch_pdf', 'pcb_pdf', 'png', 'stl', 'step']

const outFiles = getInput('out-files', { required: true }).split(/\r\n|\r|\n/g)

outFiles.forEach((file) => {
  if (!FORMATS.includes(file)) {
    throw new Error(`Invalid out-file: ${file}`)
  }

  if (file === 'step' || file === 'stl' || file === 'png') {
    exec(`mayo.sh`)
    console.log("mayo installed")
  }
})

const outDir = getInput('out-dir', { required: true })

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true })
}

