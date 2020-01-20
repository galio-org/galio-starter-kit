import React from 'react';
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from 'react-native';

// galio component
import { Block, Input } from 'galio-framework';
import theme from '../theme';

const { height, width } = Dimensions.get('window');

const SignUpInputs = () => {
  return (
      <Block style={{ paddingHorizontal: 16, width }}>
        <Input
          rounded
          placeholder="Username"
          autoCapitalize="none"
        />
        <Input
          rounded
          type="email-address"
          placeholder="Email"
          autoCapitalize="none"
        />
        <Input
          rounded
          password
          viewPass
          placeholder="Password"
        />
      </Block>
  );
};

export default SignUpInputs;