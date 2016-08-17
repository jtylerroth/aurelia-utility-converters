# aurelia-utility-converters
#### A collection of simple value converters to enhance your Aurelia application!

*Built with [aurelia-plugin-skeleton](https://github.com/aurelia/skeleton-plugin)*

## Installation

Install from NPM
`npm install aurelia-utility-converters`

or JSPM
`jspm install aurelia-utility-converters`

If using **aurelia-cli** add `aurelia-utility-converters` to your `aurelia.config` file.

Import the plugin into your application

```
aurelia.use.plugin('aurelia-utility-converters')
```

## Usage

### Value Converters
#### currency
*Displays human readable currency from number value.*

`${10500 | currency} // $10,500`

**Options (with defaults)**
```json
{
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  locale: 'en-US',
  currency: "USD",
  currencyDisplay: "symbol"
}
```

[List of supported locales] (http://www.currency-iso.org/dam/downloads/lists/list_one.xml)

#### filter
*A simple extension of [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```javascript
let videoCards = [
  { mfg: "nvidia", model: "gtx1080"},
  { mfg: "nvidia", model: "gtx980"},
  { mfg: "amd", model: "r9-380x"},
  { mfg: "amd", model: "r9-390"},
]
~~

${videoCards | filter:'mfg':'nvidia'} // { mfg: "nvidia", model: "gtx1080"},{ mfg: "nvidia", model: "gtx980"}
```


#### json
*Breaks down an object into a JSON string*

**without**
`${videoCards}  // [object Object]`

**with**
`${videoCards | json}  // [{ mfg: "nvidia", model: "gtx1080"},{ mfg: "nvidia", model: "gtx980"},{ mfg: "amd", model: "r9-380x"},{ mfg: "amd", model: "r9-390"},]`


#### limit
*Display only a certain amount from the array*

`${videoCards | limit:1}  // [{ mfg: "nvidia", model: "gtx1080"}` 


#### md5
*Converts value to MD5 hash - useful for Gravatar and other hashing needs.*
*Credit to http://www.myersdaily.org/joseph/javascript/md5.js for algorithm*

`${'foobar' | md5}  // 3858f62230ac3c915f300c664312c63f`


#### number
*Displays a number in human readable format*

`${10500 | currency} // $10,500`

**Options (with defaults)**
```json
    {
      locale: 'en-US',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }
```

`${12345.123 | number} // 12,345`

or

`${12345.123 | number:{maximumFractionDigits:2}} // 12,345.12`


#### sort
*Sorts the array by property specified. Defaults to ascending order.*

`${videoCards | sort:'mfg'}   // [{ mfg: "amd", model: "r9-380x"},{ mfg: "amd", model: "r9-390"},{ mfg: "nvidia", model: "gtx1080"},{ mfg: "nvidia", model: "gtx980"}]`

For Descending: 
`${videoCards | sort:'mfg':false}   // [{ mfg: "nvidia", model: "gtx1080"},{ mfg: "nvidia", model: "gtx980"},{ mfg: "amd", model: "r9-380x"},{ mfg: "amd", model: "r9-390"}]`

---

Thank you! I plan to update this as I create more value-converters that I find generally useful. Feel free to add your own and create a pull-request. 
