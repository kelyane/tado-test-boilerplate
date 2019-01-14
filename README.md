### tado° test boilerplate

Basic Babel/Webpack/Jest/Typescript boilerplate introduced as starting point for coding tasks and experience days.

Allows for TDD with Jest and E2E testing with puppeteer.

#### Pre-requisites
- [node](https://nodejs.org/) >=8
- [yarn](https://yarnpkg.com/)

#### Under the hood
- [babel](https://github.com/babel/babel)
- [jest](https://github.com/facebook/jest)
- [puppeteer](https://github.com/GoogleChrome/puppeteer)
- [dotenv](https://github.com/motdotla/dotenv)
- [eslint](https://github.com/eslint/eslint)
- [tslint](https://palantir.github.io/tslint/)
- [webpack](https://webpack.js.org/)
- [typescript](https://www.typescriptlang.org/)

#### Structure
```text
.
├── dist                      # output
├── assets                    # assets copied to dist on build (flattened)
│   ├── index.html            # html template used by webpack
│   └── ...
├── src                       # source code
│   ├── app-js.js                # webpack entry point
│   ├── app-js.test.js           # test file for app-js.js
│   ├── app-ts.te                # webpack entry point
│   ├── app-ts.test.ts           # test file for app-ts.ts
│   └── ...
├── .babelrc                  # babel configuration
├── .editorconfig             # editor configuration
├── .env.example              # env file example (copy to .env to use)
├── .eslintignore             # eslint ignored files
├── .eslintrc.json            # eslint configuration
├── .gitignore                # git ignored files
├── jest.config.js            # jest configuration
├── jest-puppeteer.config.js  # jest & puppeteer configuration
├── package.json              # dependencies
├── tsconfig.json             # typescript configuration
├── tslint.json               # typescript linter configuration
├── webpack.config.js         # webpack configuration
├── LICENSE.md
└── README.md
```

#### Setup
```bash
yarn
```

#### Usage  

```bash
# building
yarn build

# developing with webpack-dev-server
yarn start

# building on file change
yarn watch

# running tests
yarn test

# linting
yarn lint
```



