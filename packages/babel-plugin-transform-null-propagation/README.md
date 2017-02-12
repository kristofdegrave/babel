# babel-plugin-transform-null-propagation

null propagation allows you to access object that can be null of undefined without craching on it.

```
var a = x?.y;
```
into 
```
var a = x === undefined ? undefined : x.y;
```

## Installation

```sh
$ npm install babel-plugin-transform-null-propagation
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
$ babel --plugins transform-null-propagation script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-null-propagation"]
});
```
