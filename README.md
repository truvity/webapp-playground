# webapp-playground

## Prerequisites

1. Install `nvm`.
   > 💡See this [link](https://github.com/nvm-sh/nvm#installing-and-updating) for installation details.

2. Install correct version of `Node`.
   ```shell
   nvm install
   ```

3. Enable `corepack` for Node.js to automatically use the required `yarn` version.
   ```shell
   corepack enable
   ```

4. To avoid calling `nvm` manually for every session, set up shell integration by following [these instructions](https://github.com/nvm-sh/nvm#deeper-shell-integration).

## Install dependencies

```shell
yarn install
```

## Start developing

```shell
yarn start
```

## Build production bundle

```shell
yarn build
```
