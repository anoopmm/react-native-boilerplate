import React from 'react';
import { View,StyleSheet} from 'react-native';
import LoadingView from '../../components/loading';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    }
})

export const withLoading =  (loadingPropNames) => (WrappedComponent) => (props) => {
    const loading = loadingPropNames.reduce((acc,item)=>{
        return acc || !!props[item];
    },false);
    return (
        <View style={styles.container}>
            <WrappedComponent {...props} />
            <LoadingView isLoading={loading}/>
        </View>
    )
}

