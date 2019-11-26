import { StyleSheet } from 'react-native'
import {
    loadingModal
} from '../../constants/colors';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        ...StyleSheet.absoluteFill,
        justifyContent: 'center',
        backgroundColor:loadingModal,
        alignItems: 'center',
        zIndex:2
    }
});

export default styles;

