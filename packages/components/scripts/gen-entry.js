import fs from 'fs'
import { promisify } from 'util'

const baseUrl = './packages/components/'

const files = await promisify(fs.readdir)(`${baseUrl}/src/`)

console.log(files)

let entryFileContent = ''

files.forEach(name => {
  entryFileContent += `export { default as ${name}} from './src/${name}/'\r\r`
})

await promisify(fs.writeFile)(`${baseUrl}/index.ts`, entryFileContent)
