
/**
 * @description: 
 * @param {DOM} videoDom  要截取的dom元素
 * @param {String} outImgType 输出的图片格式
 * @return {Promise} Promise
 */
function screenshot({ videoDom, outImgType }) {
  return new Promise((resolve, reject) => {
    try {
      const width = videoDom.videoWidth
      const height = videoDom.videoHeight
      if (width === 0 && height === 0) return reject(new Error('未获取到视频流暂不支持抓拍'))
      // 创建画布准备截图
      const canvas = document.createElement('canvas')
      // 设置video属性
      videoDom.setAttribute('crossOrigin', 'anonymous')
      // 设置画布的宽高
      canvas.width = width
      canvas.height = height
      // 图片绘制
      canvas.getContext('2d').drawImage(videoDom, 0, 0, width, height)
      const dataURL = canvas.toDataURL(outImgType)
      resolve(dataURL)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = { screenshot }