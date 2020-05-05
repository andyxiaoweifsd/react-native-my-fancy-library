
import React, { PureComponent } from 'react';
import { NativeModules, Text } from 'react-native';

const { RNMyFancyLibrary } = NativeModules;
export class Demos extends PureComponent {
  render() {
    return (
      <Text>
        您好啊
      </Text>
    )
  }
}
export default RNMyFancyLibrary;
