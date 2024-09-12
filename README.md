<img src="./assets//logo.png" alt="Descripción de la imagen" width="50" />

# Moobees 

Moobees is a mobile app for iOS and Android for discovering movies and creating movies wishlists.

Moobees is built as a bare React Native CLI project.

## Try it!
You can try the app online for [iOS](https://appetize.io/app/b_ik2cffsh6evmu4h3tpo6qrt4ke) or [Android](https://appetize.io/app/b_kx4b2lrvf3ucoxhzipgxmitf5m)

## How to run locally

### 1. Set up your environment
Follow the official documentation available [here](https://reactnative.dev/docs/set-up-your-environment). Simply chose your computer OS and target Mobile OS and follow the instructions.

### 2. Clone the repo
Just go for it, its public.
```bash
$ git clone https://github.com/dariofedes/moobees.git
```

### 3. Install dependencies
Navigate to the project folder
```bash
$ cd moobees
```
Install JS dependencies
```bash
$ npm install
```
Install iOS Pods
```bash
$ cd ios && npx pod-install && cd ..
```

### 4. Run tests
You can run your tests to ensure everything is working fine

```bash
$ npm test
```

### 5. Run in simulator
#### iOS
```bash
$ npx react-native run-ios
```
#### Android
```bash
$ npx react-native run-android
```