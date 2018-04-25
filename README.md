# \<cork-style\>

CSS custom variable for cork color palette and font base

## install

```bash
yarn install @ucd-lib/cork-styles
```

## Develop

First, make sure you have webpack installed.

```bash
npm install -g webpack webpack-cli
```

Now install both element dependencies and developer dependences (in /demo).

```bash
yarn install
cd demo && npm install
```

Now fireup webpack, this will create a bundle.js file in /demo.  Bundle file
will automatically rebuild when any required resource changes.

```bash
cd demo && npm run dev
```

Finally, serve demo directory.  Recommend http-server.

Install http-server
```bash
npm install -g http-server
```

Serve demo directory
```bash
http-server demo
```
