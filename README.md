# Charlie Hebdo Mobile Application #
# Build Instructions
First download all of the necessary software for [React Native](https://facebook.github.io/react-native/docs/getting-started.html). Be sure to use the install directions for native code applications, not for Expo-based applications.

Make sure you have the latest version of [Android Studio](https://developer.android.com/studio/index.html) and XCode with all of their dependencies. Since the project deploys to both iOS and Android, you will need to build the project on a mac.

Once you have all of the prerequisite software, clone the repository and cd into the root directory. Run `yarn` and `react-native link .` to install all of the node modules.

Run `react-native run-ios` to launch the iOS version of the application. Alternative you can open the `ios/cahlMobile.xcodeproj` in XCode and build the project there.

To run the Android version, first start a device simulator from within Android Studio. Then once the device is loaded, run `react-native run-android`.

The `develop` branch is where you should merge all feature branches. It requires the `cahl-orpheus` api to be running locally in the background. Once a feature is tested and working on the `develop` branch, pull the changes to `production/ios` and `production/android`. These branches have special configurations for pushing any changes to production. They use the `http://api.cahl.orphe.us/graphql` api for their data requests.
