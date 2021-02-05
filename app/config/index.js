const fs = require('fs');

const TYPE = ['single', 'double', 'three']
const CVT_DIR_NAME = TYPE[0]; // 简历模板类型
const CVT_DIR_VERSION = false; // 是否创建简历模板新版本


/**
 * 创建模板
 */
module.exports.createTemplate = function () {
    fs.mkdir('template/css', function (error) {
        if (error) return false;
    });
};
