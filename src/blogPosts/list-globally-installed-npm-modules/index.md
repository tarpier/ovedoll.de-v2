---
title: List globally installed NPM Packages
date: "2018-09-09"
private: false
template:
---

One thing I keep googling is how to list my global npm modules. So for everybody who keeps forgetting this one-liner like me, here we go.

## Packages installed through npm

```bash
npm list -g --depth=0
```

Right now this gives me following result:

```bash
/usr/local/lib
├── elm@0.19.0-bugfix2
├── elm-format@0.8.0
└── npm@6.2.0
```

All of these modules are installed globally through npm into `/usr/local/lib/node_modules` on Mac Os. To check the directory use `npm root -g`

If you have installed global packages through Yarn, then these will not be in the same directory. I know a lot of people, me included, assume this at first.

## Packages installed through yarn

Yarn (default) adds packages to `~/.config/yarn/global`. To see which ones are installed globally use

```bash
yarn global list
```

Right now I get the following output:

```bash
info "create-react-app@1.5.2" has binaries:
   - create-react-app
info "gatsby@1.9.270" has binaries:
   - gatsby
info "react-native-cli@2.0.1" has binaries:
   - react-native
```
