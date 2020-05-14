import React, {Component} from 'react';
import {Box, Text} from 'react-native-design-utility';
import {TouchableOpacity,Alert} from 'react-native';

import OnboardingLogo from '../commons/OnboardingLogo';
import LoginButton from '../commons/LoginButton';

class LoginScreen extends Component {
    state = { };
    
    onGooglePress = () => {
        Alert.alert('Google Press');
    }
    onFacebookPress = () => {
        Alert.alert('Facebook Press');
    }

    render() {
        return(
            <Box f={1} center bg="white">
                <Box f={1} center>
                    <OnboardingLogo/>
                </Box>
                <Box f={0.9} w={1}>
                    <LoginButton onPress= {this.onGooglePress} type="google" > Continue with Google </LoginButton>
                    <LoginButton onPress= {this.onFacebookPress} type="facebook" >  Continue with Facebook </LoginButton>
                </Box>
            </Box>
        );
    }
}

export default LoginScreen;