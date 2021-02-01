const { rename } = require('fs/promises')
const path = require('path')
;(async function () {
  const file = path.join(__dirname, '..', 'dist', 'react-spline.modern.js')
  await rename(file, file.replace('react-spline.modern', 'index'))
  console.log('moved file')
})()
