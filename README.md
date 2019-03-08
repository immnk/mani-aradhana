# Aradhana App

[![Build Status](https://travis-ci.com/immnk/mani-aradhana.svg?branch=master)](https://travis-ci.com/immnk/mani-aradhana) [![Dependencies](https://david-dm.org/immnk/mani-aradhana.svg)](https://david-dm.org/) [![Open Issues](https://img.shields.io/github/issues-raw/immnk/mani-aradhana.svg)](https://github.com/immnk/mani-aradhana/issues) [![Tests](https://img.shields.io/badge/tests-covered-inactive.svg)](https://github.com/immnk/mani-aradhana/issues/2)

> A mobile app made for my communication with my girlfriend

## Table of contents

1. [Set up](#set-up)
2. [Test](#test)
3. [Tasks](#tasks)
4. [Useful websites](#useful-websites)
5. [VS Code Plugins Recommended](#vs-code-plugins-recommended)
6. [LICENSE](#license)

## Set Up

When running the for first time, run the following steps:

1. Create a build for android: `ionic cordova build android --release`
2. Create a keystore for validating: `keytool -genkey -v -keystore aaru.keystore -alias aaru -keyalg RSA -keysize 2048 -validity 10000`
3. To sign the APK generated using Step 1 with keystore generated in Step 2: `jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore aaru.keystore D:\MyProjects\ionic\aradhana\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk aaru`
4. To run an alignment utility on it to optimize it and prepare it for the app store: `C:\Softwares\Android\build-tools\28.0.3\zipalign -v 4 platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk aaru.apk`

## Test

Pending To-Do Task

## Tasks

All tasks and issues are listed as items in [Tasks & issues in repository Issues tab](https://github.com/immnk/mani-aradhana/issues)

- [x] Write a README file.
- [ ] Create unit test cases with Mocha(JS test framework) and Chai(assertion library)
- [ ] Add CI/CD pipelines
- [ ] Modify CSS for various pages
- [ ] Update ReadMe file for license, templates, codeowners, PR templates

## VS Code Plugins Recommended

- Beautify
- Debugger for Chrome
- ESLint
- GitLens
- IntelliSense for CSS class names
- markdownlint
- vscode-icons

## Useful websites

1. [Publishing your app](https://ionicframework.com/docs/v1/guide/publishing.html)

## License

[MIT License](https://github.com/immnk/mani-aradhana/blob/master/LICENSE)
