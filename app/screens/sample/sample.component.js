import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const SampleScreen = (props) => {



  onLogoutPress = () =>{
    const { handlelogout } = props;
    handlelogout && handlelogout();
  }
  return(<View style={styles.container}>
    <Text>Sample Screen</Text>
    <View style={styles.innerBody}>
      <TouchableOpacity
       onPress={onLogoutPress}>
        <Text>Logout</Text>    
      </TouchableOpacity>
    </View>  
  </View>)

};

export default SampleScreen;
