import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';

export default function DemoFormik() {
  // errors: tra ra cac thong bao loi va vi pham validation do minh quy dinh
  // handleChange(key): lay gia tri cua tat ca cac the input va duoc dai dien boi key, key la duy nhat
  // values: dai dien cho cac gia tri nhap vao the

  const validSchema = Yup.object().shape({
    // quy dinh cho tung key o initialValues trong formik
    username: Yup.string()
      .min(2, 'username không được nhỏ hơn 2 ký tự!')
      .max(10, 'username không được lớn hơn 10 ký tự!')
      .required('Required'),
    // .test(value => {
    //   if (value == 'cybersoft') return true;
    //   else return false;
    // }),
  });

  return (
    <Formik
      initialValues={{username: '', password: ''}}
      validationSchema={validSchema}
      onSubmit={values => {
        console.log(values);
      }}>
      {({errors, handleChange, handleBlur, handleSubmit}) => {
        console.log(errors);
        return (
          <View>
            <TextInput
              placeholder="User name"
              onChangeText={handleChange('username')}></TextInput>
            {errors.username ? <Text>{errors.username}</Text> : ''}
            <TextInput
              placeholder="Password"
              onChangeText={handleChange('password')}></TextInput>

            <Button title="Login" onPress={handleSubmit}></Button>
          </View>
        );
      }}
    </Formik>
  );
}
