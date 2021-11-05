# url-exists-nodejs

A node.js library to check if a url exists (with zero dependencies)

## Install

```sh
# with npm
npm install url-exists-nodejs

# with yarn
yarn add url-exists-nodejs
```

```js
import isUrlExists from 'url-exists-nodejs'
```

## API

```ts
isUrlExists(url: string): Promise<boolean>
```

## Usage

```js
await isUrlExists('https://google.com') // => true

// a well typed url that can't be found
await isUrlExists('https://httpbin.org/status/404') // => false

await isUrlExists('not-a-valid-url') // => false

// can deep check a redirect url
await isUrlExists('https://bit.ly/300awAn') // => true
```
