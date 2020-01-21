import React from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet
} from 'react-native';

// galio component
import {
  Block, Button, Text,
} from 'galio-framework';
import theme from '../theme';

const { height } = Dimensions.get('window');

const SignUpSocial = () => {
  return (
    <Block flex center style={{ marginTop: theme.SIZES.BASE * 1.875, marginBottom: height * 0.1 }}>
      <Text h2 color="black" style={{ marginBottom: theme.SIZES.BASE}}>Sign Up</Text>
      <Text muted center size={theme.SIZES.SMALL} style={{ paddingHorizontal: theme.SIZES.BASE * 2.3 }}>
          via
      </Text>
      <Block row center space="between" style={{ marginVertical: theme.SIZES.BASE }}>
          <Block flex middle right>
            <Button
              round
              onlyIcon
              iconSize={theme.SIZES.BASE * 1.625}
              icon="facebook-f"
              iconFamily="font-awesome"
              color={theme.COLORS.FACEBOOK}
              shadowColor={theme.COLORS.FACEBOOK}
              iconColor={theme.COLORS.WHITE}
              style={styles.social}
              onPress={() => Alert.alert('SignUp via Facebook')}
          />
          </Block>
          <Block flex middle center>
            <Button
              round
              onlyIcon
              iconSize={theme.SIZES.BASE * 1.625}
              icon="twitter"
              iconFamily="font-awesome"
              color={theme.COLORS.TWITTER}
              shadowColor={theme.COLORS.TWITTER}
              iconColor={theme.COLORS.WHITE}
              style={styles.social}
              onPress={() => Alert.alert('SignUp via Twitter')}
          />
          </Block>
          <Block flex middle left>
            <Button
              round
              onlyIcon
              iconSize={theme.SIZES.BASE * 1.625}
              icon="dribbble"
              iconFamily="font-awesome"
              color={theme.COLORS.DRIBBBLE}
              shadowColor={theme.COLORS.DRIBBBLE}
              iconColor={theme.COLORS.WHITE}
              style={styles.social}
              onPress={() => Alert.alert('SignUp via Dribbble')}
          />
          </Block>
      </Block>
      <Text muted center size={theme.SIZES.SMALL}>
        or be classical
      </Text>
    </Block>
  );
};

const styles = StyleSheet.create({
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
  },
});

export default SignUpSocial;
