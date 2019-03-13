/**
 * 小程序配置文件
 */

// var host = "apitest.ipaotui.com"
var host = "myserver.com:8080"
const debug = wx.getStorageSync('debug')
if (debug) {
  host = "myserver.com:8080"
}


module.exports = {
    host, 
    qqmapKey: 'FPOBZ-UT2K2-ZFYUC-CX67E-IOOYS-7XFQ6'
}
