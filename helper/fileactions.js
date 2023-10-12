
module.exports = {
  createFile
  // deleteFile,
  // readFile
}
const fs = require('fs')
const path = require('path')
const folderPath = __dirname + '/../data/'

async function createFile (studentId, fileContent) {
  const fileName = `${studentId}.json`
  const filePath = path.join(folderPath, fileName)
  fs.writeFile(filePath, JSON.stringify(fileContent), 'utf8', (err) => {
    if (err) {
      console.error('Error writing to the file:', err)
    } else {
      console.log('File has been written successfully.')
    }
  })
}
async function readFile () {

}
async function deleteFile(studentId) {
  const fileName = `${studentId}.json`
  const filePath = path.join(folderPath, fileName)
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting the file: ${err}`)
    } else {
      console.log(`File ${filePath} has been deleted.`)
    }
  })
}
