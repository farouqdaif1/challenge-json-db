module.exports = {
  getHealth,
  putStudentData,
  getStudentData,
  removeStudentData
}
const fileHelper = require('./helper/fileactions')
const utils = require('./helper/util')

async function getHealth (req, res, next) {
  res.json({ success: true })
}
async function putStudentData (req, res) {
  const { studentId } = req.params
  const postData = utils.createObject(req.params[0], req.body)
  try {
    const data = await fileHelper.createFile(studentId, postData)
    
    res.json({ message: 'Data created Successfully', data :data })
  } catch (error) {
    res.status(500).json({ message: error, status: false })
  }
}
async function getStudentData (req, res) {
  try {
    const { studentId } = req.params
    const data = await fileHelper.readFile(studentId)
    res.json(data)
  } catch (err) {
    res.status(404).send({ error: err.message })
  }
}
async function removeStudentData (req, res) {
  try {
    const { studentId } = req.params
    const data = await fileHelper.deleteFile(studentId)
    if (!data) {
      res.json({ msg: 'Data Deleted' })
    }
  } catch (err) {
    res.status(404).send({ error: err.message })
  }
}
