import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
// galio component
import { Block, NavBar, Icon } from 'galio-framework';
import theme from '../theme';

import SignUpInputs from '../organisms/SignUpInputs';
import SignUpSocial from '../organisms/SignUpSocial.js';
import SignUpButtons from '../organisms/SignUpButtons.js';


class Login extends React.Component {

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    const { navigation } = this.props;

    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar
          title="Sign Up"
          onLeftPress={() => navigation.openDrawer()}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
        />
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
          <SignUpSocial />
          <SignUpInputs />
          <SignUpButtons />
        </KeyboardAvoidingView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
  },
});

export default Login;
