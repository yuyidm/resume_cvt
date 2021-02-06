const fs = require('fs');
const sd = require('silly-datetime')
const crypto = require('crypto');

function createSassFile(rootDir, fileName) {
    const path = rootDir + '/css/' + fileName + '.scss'
    const str = `.t${fileName} {\r\n\t\r\n}`

    fs.mkdir(rootDir + '/css', {recursive: true}, function (error) {
        if (error) return false;
        fs.writeFile(path, str, 'utf8', function (error) {
            if (error) return false;
        })
    });
}

function createJsFile(rootDir, fileName) {
    const path = rootDir + '/js/' + fileName + '.js'
    // language=JavaScript
    const str = `(function (global) {
    let className = 't${fileName}'

    global.code = +new Date()
    global.colors = []
    global.padding = 20
    global.fontSize = 16
    global.computed = {
        name: className,
        data() {
            return {}
        },
        // language=Vue
        template: \`
            <div class="cv__swap"></div>
        \`
    }
})(resumeTemplate)`
    fs.mkdir(rootDir + '/js', {recursive: true}, function (error) {
        if (error) return false;
        fs.writeFile(path, str, 'utf8', function (error) {
            if (error) return false;
        })
    });
}

function createImgDir(rootDir) {
    fs.mkdir(rootDir + '/img', {recursive: true}, function (error) {
        if (error) return false;
    });
}

module.exports = function (type) {
    const date = sd.format(new Date(), 'YYYYMMDDHHmmss');
    const name = `${type}_${date}_001`
    const rootDir = process.cwd() + '/template/' + name
    const fileName = crypto.randomBytes(6).toString('hex');
    createImgDir(rootDir)
    createSassFile(rootDir, fileName)
    createJsFile(rootDir, fileName)
    console.info('模板初始化文件创建成功，目录：' + 'template/' + name)
}