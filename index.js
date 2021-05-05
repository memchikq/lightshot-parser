const fetch = require("node-fetch")
const cheerio = require("cheerio")
const fs = require("fs")
const buffer = require("buffer")
const path = require("path")
/**
 *@param {Number} [quantity] Number of screenshots
 *@param {String} [src] Where to download directory
**/
function imgParser(quantity,src) {
  let c = quantity
  async function getImg() {
    if (c > 0) {
      try {
        const randomString = "abcdefghijklmnopqrstuvwxyz1234567890"
        let url = ''
        for(let i=0;i < 6;i++){
            url += randomString[Math.floor(Math.random()*randomString.length)]
        }
        const response = await fetch(`https://prnt.sc/${url}`)
        const bufferResponse = await response.arrayBuffer() 
        const bf = buffer.Buffer.from(bufferResponse)
        const decoder = new TextDecoder("utf-8")
        const decode = decoder.decode(bf)
        const $ = cheerio.load(decode)
        const rows = $(".screenshot-image")
        if(!rows[0].attribs.src.startsWith("/") && rows[0].attribs.src && !rows[0].attribs.src.match(/i.imgur/g)){
            c--
            let img = rows[0].attribs.src && await fetch(rows[0].attribs.src)
            const response = await img.arrayBuffer()
            const imgBuffer = buffer.Buffer.from(response)
            fs.writeFileSync(path.join(src,`${getCache()}.png`), imgBuffer, 'binary');
        }
      } catch (e) {
        throw new Error(e)
      }
      getImg()
    }
  }
  getImg()
} 
function getCache() {
  const c = "abcdefghijklmnopqrstuvwxyz1234567890"
  let randomWords = ""
  for (let i = 0; i < 7; i++) {
    randomWords += c[Math.floor(Math.random() * c.length)]
  }
  return randomWords
}

module.exports = imgParser