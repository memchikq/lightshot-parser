# lightshot-parser
---
You can use this script to parse screenshots from the site https://prnt.sc

## Installation 
`npm i lightshot-parser`

### Using
```
const imgParser = require("lightshot-parser")
// this function has four arguments

// the first argument is how many screenshots need to be parsed

// the second argument is the path to save screensots

// the third argument is the delay (milliseconds) in sending the request (default - 1000ms)

// If the requests are too frequent, there is a chance of your IP being banned on the site prnt.sc 
// I recommend making a delay of a few seconds, the probability of your IP being banned will be lower

// (optional argument) the fourth argument is template, the link will start with these letters (default - null)

imgParser(15,"./img",2000,"aq1")

// after calling the function, screenshots will be uploaded to the directory
```
 --- 

 ### You can also install [ligthsot-parser-cli](https://www.npmjs.com/package/lightshot-parser-cli) for parsing from the terminal
