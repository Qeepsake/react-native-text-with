# react-native-text-with

[![npm](https://img.shields.io/npm/v/react-native-text-with.svg?style=flat-square)](https://www.npmjs.com/package/react-native-text-with)
[![npm licence](http://img.shields.io/npm/l/react-native-text-with.svg?style=flat-square)](https://npmjs.org/package/react-native-text-with)
[![npm downloads](http://img.shields.io/npm/dt/react-native-text-with.svg?style=flat-square)](https://npmjs.org/package/react-native-text-with)

Extension of the `<Text/>` component to allow easy placement of an object, image or icon beside text in React Native

![To the left](https://raw.githubusercontent.com/LukeBrandonFarrell/open-source-images/master/react-native-text-with/one.png)
![To the right](https://raw.githubusercontent.com/LukeBrandonFarrell/open-source-images/master/react-native-text-with/two.png)
![At the top](https://raw.githubusercontent.com/LukeBrandonFarrell/open-source-images/master/react-native-text-with/three.png)
![At the bottom](https://raw.githubusercontent.com/LukeBrandonFarrell/open-source-images/master/react-native-text-with/four.png)
![No object](https://raw.githubusercontent.com/LukeBrandonFarrell/open-source-images/master/react-native-text-with/five.png)

## Install

To get started install via npm:
```sh
 npm install react-native-text-with --save
```

## Usage

To use in React Native. Import:
```js
 import TextWith from 'react-native-text-with';
```

Then add it to your code:
```js
<TextWith
  object={<Image source={}/>}
  objectPosition='left'
  objectMargin={5}>
  This is some text with an image to the left
</TextWith>

```

Works as a normal react <Text/> component. All probs available from `<Text/>`.
```js
<TextWith onPress={console.log('This is a ordinary text component')}>
  This is some text
</TextWith>
```

Works with [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons). But it's not a dependency! nor a necessity.
```js
<TextWith
  object={<Icon name='pencil' size={ 18 }/>}
  objectPosition='left'
  objectMargin={20}>
  This is some text
</TextWith>
```

## Props

**Note:** The component can take all props available to `<Text/>`

| Prop            | Type          | Optional  | Default              | Description                                                                             |
| --------------- | ------------- | --------- | -------------------- | --------------------------------------------------------------------------------------- |
| children        | Any           | Yes       |                      | Pass anything into text `<TextWith>` I am text! `</TextWith>`                           |
| object          | object        | Yes       |                      | Image, Icon or component of your choice to be rendered beside text                      |
| objectPosition  | enum          | Yes       | 'left'               | Where the component should be rendered ('left', 'right', 'top', 'bottom')               |
| objectMargin    | number        | Yes       | 4                    | Direction of the collage: 'row' or 'column'.                                            |
| textStyle       | object        | Yes       |                      | Style to be applied to the text component                                               |
| containerStyle  | object        | Yes       | alignItems: 'center' | Style to be applied to the container component. Text and Icon.                          |

## Contributing

If you want to issue a PR, go ahead ;)

## Authors

* [**Luke Brandon Farrell**](https://lukebrandonfarrell.com/) - *Author*

## License

This project is licensed under the MIT License
