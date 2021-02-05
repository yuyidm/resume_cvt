const fs = require('fs');

// 简历模板名称
module.exports.CVT_DIR_NAME = '';
// 是否创建简历模板新版本
module.exports.CVT_DIR_VERSION = false;

/**
 * 创建模板
 */
module.exports.createTemplate = function () {
    fs.mkdir('template/css', function (error) {
        if (error) return false;
    });
};
