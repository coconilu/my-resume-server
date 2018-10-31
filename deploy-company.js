let { exec } = require('child_process')
const util = require('util')

exec = util.promisify(exec)

exec('del /s/q .\\public\\*.*').then((stdout, stderr) => {
    console.log("成功清除")
    return exec('xcopy /e ..\\..\\react\\my-resume\\build .\\public')
}).then((stdout, stderr) => {
    console.log("成功导入")
}).catch(err => {
    console.log("失败：", err)
})