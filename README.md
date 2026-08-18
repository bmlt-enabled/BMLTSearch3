# BMLT Meeting Search

> [!NOTE]
> Repo is archived and has moved to the new svelte version [https://github.com/bmlt-enabled/BMLTSearch](https://github.com/bmlt-enabled/BMLTSearch)

This app is built for Android and Apple devices using the Ionic Framework (For more details see https://ionicframework.com/)

The app can also be viewed on a browser at https://bmltsearch.bmlt.app 

## Apple iphone/ipad app link

https://itunes.apple.com/us/app/bmlt-search/id1370165741?mt=8

## Android phone/tablet link

https://play.google.com/store/apps/details?id=ie.nasouth.bmltsearch&hl=en

## Build it yourself (on a mac)

You will need to follow the guidelines to build ionic capacitor apps at https://capacitorjs.com/docs.

At a minimum, run the following commands to run the app in a browser

```
git clone https://github.com/bmlt-enabled/BMLTSearch3.git
cd BMLTSearch3
npm install -g @ionic/cli
npm install
ionic build
ionic serve
```

The `ionic serve` command should load the web version of the app to a browser on your laptop, which will be visible on http://localhost:8100/home

To build the smartphone apps, you will need to have Xcode installed (for ios apps) and Android Studio installed (for android apps)

To open the ios project in Xcode, run
```
ionic cap build ios
```

To open the android project in Android Studio, run 
```
ionic cap build android
```

## Branches
The default branch is called `version_5`
This corresponds to the 5.xx.xx releases for Apple and Android.

`version_5` uses only capacitor plugins.
`version_4` and earlier used ionic native plugins, some on which are no longer supported.

The `version_3` branch holds the source code for the old version 3.xx.xx releases.

The `version_4` branch holds the source code for the old version 4.xx.xx releases
