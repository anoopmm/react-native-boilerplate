import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';

const SplashScreen = (props) => {
    const setSplashDelay = () =>{
        const { onAppStart } = props;
        setTimeout(()=>{
            onAppStart && onAppStart();
        },2000);
    }

    useEffect(() => {
        setSplashDelay();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Splash Screeen</Text>
        </View>
    );
};

SplashScreen.propTypes = {
    onAppStart: PropTypes.func
}

SplashScreen.defaultProps = {
    onAppStart: () => {}
}

export default SplashScreen;
