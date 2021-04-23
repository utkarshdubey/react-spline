const { rename, copyFile } = require('fs/promises')
const path = require('path')
const dist = path.join(__dirname, '..', 'dist')
;(async function () {
  const file = path.join(dist, 'react-spline.modern.js')
  await rename(file, file.replace('react-spline.modern', 'index'))
  console.log('moved file')
})()
