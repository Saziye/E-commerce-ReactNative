import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import {Image} from 'react-native';

import {images} from '../constants/images'

const OnboardingLogo = () => {
    return (
        <Box center>
            <Box mb="sm">
                <Image source= {images.logo} />
            </Box>
            <Box mb="sm">
                <Text size="2xl">
                    In
                    <Text size="xl" color="green">
                        Store
                    </Text>
                </Text>
            </Box>
            <Text size="sm">easy grocery shopping.</Text>
        </Box>
    );    
};

export default OnboardingLogo;