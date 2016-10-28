# babel-plugin-transform-conditional-member-access

Turn a conditional memberaccess into a normal member acces with an undefine check.

```
var a = x?.y;
```
into 
```
var a = x === undefined ? undefined : x.y;
```

## Installation

```sh
$ npm install babel-plugin-transform-conditional-member-access
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-conditional-member-access"]
}
```

### Via CLI

```sh
$ babel --plugins transform-conditional-member-access script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-conditional-member-access"]
});
```
