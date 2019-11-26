import React from 'react';
import PropTypes from 'prop-types'; 
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

const loadingView = ({isLoading}) =>{
    return (
        isLoading ?
            <View style={styles.container}>
              <ActivityIndicator />
            </View> : null
    )
}
loadingView.defaultProps = {
    isLoading:false
}
loadingView.propTypes = {
    isLoading:PropTypes.bool
}
export default loadingView;