import React, {useCallback, useState} from 'react';
import {validateEmail} from '../../../helpers/validate';
import useFormInput from '../../../hooks/useFormInput';
import SignUpView from './signUp.view';
import WithCheckConnection from '../../../HOC/withCheckConnection';

const SignUpContainer = ({navigation}) => {
  const email = useFormInput('');
  const pass = useFormInput('');
  const fullName = useFormInput('');

  const [textDangerEmail, setTextDangerEmail] = useState('');

  const onPressButtonLogin = () => {
    let check = false;
    if (!validateEmail(email.value)) {
      setTextDangerEmail('Email is wrong format!');
      check = true;
    } else {
      setTextDangerEmail('');
    }

    if (!check) {
      navigation.push('Login', {email: email.value});
    }
  };

  const onPressLoginHere = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <SignUpView
      isPress={!!email.value && !!pass.value && !!fullName.value}
      textDangerEmail={textDangerEmail}
      fullName={fullName}
      pass={pass}
      email={email}
      onPressButtonLogin={onPressButtonLogin}
      onPressLoginHere={onPressLoginHere}
    />
  );
};

export default WithCheckConnection(SignUpContainer);
