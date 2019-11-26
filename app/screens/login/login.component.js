import React from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { formLogic } from '../../hoc/form';

const initialFieldState = {
  email: '',
};

const initialErrState = {
  emailErr: '',
};

const config = {
  fields: [{
    field: 'email',
    emptyValidation: true,
    emptyErrMsg: 'Please enter email',
    regexValidation: false,
  }],
};

const LoginScreen = (props) => {
  let btnRef = null;

  const {
    fieldState,
    errState,
    updatefieldState,
    checkEmptyValidation,
  } = formLogic({ initialFieldState, initialErrState, config });

  const handleOnChange = key => (text) => {
    updatefieldState(key, text);
  };

  const handleLoginPress = () => {
    checkFormValidation();
  };

  const checkFormValidation = () => {
    const { handlelogin } = props;
    if (checkEmptyValidation && checkEmptyValidation()) {
      handlelogin && handlelogin();
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>Login</Text>
        <View style={styles.formWrapper}>
            <TextInput
                style={styles.textInput}
                value={fieldState.email}
                onChangeText={handleOnChange('email')}
              />
            <Text>{errState.emailErr}</Text>
            <TouchableOpacity
                ref={refs => btnRef = refs}
                onPress={handleLoginPress}
              >
                <Text>Login</Text>
              </TouchableOpacity>
          </View>
      </View>
  );
};

export default React.memo(LoginScreen);
