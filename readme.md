
# boilerplate-ts-express 🚀

Fullstack react-express using typescript + webpack

## Installation

Use `npm` or `yarn` to install and run.

```shell
npm install
```
```shell
rm package-lock.json && yarn
```
#### *The post install script will also build the project.*


## Setup
*Optional* as the post-build should take of building the project.

```shell
npm run build 
```
```shell
yarn build
```
> The `build` script builds the client and server from the TypeScript source code
See [scripts](#scripts) for more options, including a prod build.

## Usage

```shell
npm run dev # for development builds
```
```shell
yarn build
```
```shell
npm run start # for prod builds 
```
```shell
yarn start
```

# Details

### File tree

<details>
<summary>Expand to see file tree</summary>
<p>

```
boilerplate-ts-express/
├── src/
│   ├── client/
│   │   ├── actions/
│   │   │   └── index.ts
│   │   ├── api/
│   │   │   └── client.ts
│   │   ├── components/
│   │   │   ├── AddWord.tsx
│   │   │   ├── App.tsx
│   │   │   ├── Price.tsx
│   │   │   ├── Word.tsx
│   │   │   └── Words.tsx
│   │   ├── reducers/
│   │   │   ├── index.ts
│   │   │   └── words.ts
│   │   ├── index.tsx
│   │   └── tsconfig.json
│   └── server/
│       ├── api/
│       │   └── coingecko.ts
│       ├── public/
│       │   ├── images/
│       │   │   └── favicon.ico
│       │   ├── stylesheets/
│       │   └── index.html
│       ├── routes/
│       │   ├── api.ts
│       │   └── index.ts
│       ├── index.ts
│       ├── server.ts
│       └── tsconfig.json
├── package-lock.json
├── package.json
├── readme.md
└── webpack.config.ts
```

</p>
</details> 


### Scripts

<details>
<summary>Expand to see scripts</summary>
<p>

```json5
{
  "scripts": {
    "postinstall": "npm run build",
    "start": "node server dist/server/index.js",
    "build": "run-p build:client build:server",
    "build:watch": "tsc --build ./ --watch",
    "build:client": "tsc --build ./src/client",
    "build:watch:client": "tsc --build ./src/client --watch",
    "build:server": "tsc --build ./src/server",
    "build:watch:server": "tsc --build ./src/server --watch",
    "dev": "run-p build:watch:client build:watch:server dev:client dev:server",
    "dev:client": "npm run webpack -- --watch",
    "dev:server": "nodemon --watch server dist/server/index.js",
    "webpack:prod": "npm run webpack -- --mode production",
    "webpack": "webpack --config ./webpack.config.ts",
    "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx ./src"
  },
}
```

</p>
</details> 

### Linter

<details>
<summary>Expand to see linter details</summary>
<p>

```json5
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "standard",
    "prettier"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "ignorePatterns": [
    "./server/bin/www"
  ],
  "rules": {
    "no-use-before-define": 0
  }
}
```

</p>
</details>
