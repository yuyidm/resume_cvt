const createCvt = require('./create_cvt')
const TYPE = ['single', 'double', 'three']
const CVT_DIR_TYPE = 0; // 简历模板类型， 默认为单栏简历
const CVT_DIR_NAME = false; // 是否创建简历模板新版本, 如果创建则更改为简历模板目录名称

/**
 * 创建模板
 */
module.exports = function () {
    // fs.mkdir('template/css', function (error) {
    //     if (error) return false;
    // });
    console.log()
    createCvt(TYPE[CVT_DIR_TYPE])
};
