
module.exports = {
  createFile,
  deleteFile,
  readFile
}
const fs = require('fs').promises
const path = require('path')
const folderPath = path.join(__dirname, '/../data/')

async function createFile (studentId, postedData) {
  const fileName = `${studentId}.json`
  const filePath = path.join(folderPath, fileName)
  try {
    await fs.writeFile(filePath, JSON.stringify(postedData), 'utf8')
    const data = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    throw error
  }
}
async function readFile (studentId) {
  const fileName = `${studentId}.json`
  const filePath = path.join(folderPath, fileName)
  try {
    const data = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    throw error
  }
}
async function deleteFile (studentId) {
  const fileName = `${studentId}.json`
  const filePath = path.join(folderPath, fileName)
  try {
    const student = await fs.unlink(filePath)
    return student
  } catch (error) {
    throw error
  }
}
