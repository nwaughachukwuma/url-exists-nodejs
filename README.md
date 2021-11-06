# url-exists-nodejs

A node.js library to check if a url exists (with zero dependencies)

## Install

```bash
# pnpm
pnpm install url-exists-nodejs

# yarn
yarn add url-exists-nodejs

# npm
npm install url-exists-nodejs
```

```js
import urlExists from 'url-exists-nodejs'
```

## API

```ts
urlExists(url: string): Promise<boolean>
```

## Usage

```js
await urlExists('https://google.com') // => true

// a well typed url that can't be found
await urlExists('https://httpbin.org/status/404') // => false

await urlExists('not-a-valid-url') // => false

// can deep check a redirect url
await urlExists('https://bit.ly/300awAn') // => true
```
