import React from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
// galio component
import {
  Block, Button, Input, Text, NavBar,
} from 'galio-framework';
import theme from '../theme';

const { height, width } = Dimensions.get('window');

import SignUpSocial from '../Organisms/SignupSocial.js';

class Login extends React.Component {
  state = {
    user: '-',
    email: '-',
    password: '-',
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    const { navigation } = this.props;
    const { user, email, password } = this.state;

    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar
          title="Sign Up"
          onLeftPress={() => navigation.openDrawer()}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
          />
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        
          <SignUpSocial />

          <Block flex={2} center space="between">
            <Block flex={2}>
              <Input
                rounded
                placeholder="Username"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('user', text)}
              />
              <Input
                rounded
                type="email-address"
                placeholder="Email"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('email', text)}
              />
              <Input
                rounded
                password
                viewPass
                placeholder="Password"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('password', text)}
              />
            </Block>
            <Block flex middle>
              <Button
                round
                color="error"
                onPress={() => Alert.alert(
                  'Sign up action',
                  `
                  Username: ${user}
                  Email: ${email}
                  Password: ${password}`,
                )}
              >
                Sign up
              </Button>
              <Button color="transparent" shadowless onPress={() => navigation.navigate('Login')}>
                <Text center color={theme.COLORS.ERROR} size={theme.SIZES.FONT * 0.75}>
                  Already have an account? Sign In
                </Text>
              </Button>
            </Block>
          </Block>
        </KeyboardAvoidingView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
  }
});

export default Login;
