# lightshot-parser
---
You can use this script to parse screenshots from the site https://prnt.sc

## Installation 
`npm i lightshot-parser`

### How to use
```
const imgParser = require("lightshot-parser")
// this function has three arguments
// the first argument is how many screenshots need to be parsed
// the second argument is the path to save screensots
// (optional argument) the third argument is pattern, the link will start with these letters (default - null)
imgParser(5,"./img","aq1")
// after calling the function, screenshots will be uploaded to the directory
```
