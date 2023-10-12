module.exports = {
  getHealth,
  putStudentData,
  getStudentData,
  removeStudentData
}
async function putStudentData (req, res) {
  const { studentId, propertyName } = req.params

  res.send(`Updated property ${propertyName} for student ${studentId}`)
}
async function getStudentData (req, res) {

}
async function removeStudentData (req, res) {

}

async function getHealth (req, res, next) {
  res.json({ success: true })
}
