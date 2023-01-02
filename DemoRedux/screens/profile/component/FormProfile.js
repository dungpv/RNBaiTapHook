import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import styles from '../styles/styles';
import {Field, Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {updateProfile} from '../EditProfileThunk';

export default function FormProfile() {
  const validSchema = Yup.object().shape({
    name: Yup.string().required('Vui lòng nhập Tên'),
    email: Yup.string()
      .required('Vui lòng nhập email')
      .matches(
        /^([\w.-]+)@(\[(\d{1,3}\.){3}|(?!yahoo\.mail)(([a-zA-Z\d-]+\.)+))([a-zA-Z]{2,4}|\d{1,3})(\]?)$/,
        'Sai định dạng và không dùng yahoo.mail',
      ),
    password: Yup.string()
      .required('Vui lòng nhập mật khẩu')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Phải bao gồm chữ hoa, thường, ký tự đặc biệt, và 8 ký tự',
      ),
    phone: Yup.string()
      .required('Vui lòng nhập mật khẩu')
      .min(11, 'SĐT phải là 11 số')
      .max(11, 'SĐT phải là 11 số'),
  });

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        phone: '',
        facebookId: '',
      }}
      validationSchema={validSchema}
      onSubmit={values => {
        console.log(values);
        //dispatch(updateProfile(values));
      }}>
      {({errors, handleSubmit, handleChange}) => {
        console.log(errors);
        return (
          <View style={styles.form}>
            <Text style={styles.mLeft8}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={handleChange('name')}
            />

            <Text style={[styles.mLeft8, styles.mTop16]}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="example@gmail.com"
              onChangeText={handleChange('email')}
            />

            <Text style={[styles.mLeft8, styles.mTop16]}>Password</Text>
            <TextInput
              secureTextEntry
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
            />

            <Text style={[styles.mLeft8, styles.mTop16]}>Phone</Text>
            <TextInput
              style={styles.input}
              placeholder="Phone"
              onChangeText={handleChange('phone')}
            />

            <Text style={[styles.mLeft8, styles.mTop16]}>Facebook Id</Text>
            <TextInput
              style={styles.input}
              placeholder="Facebook Id"
              onChangeText={handleChange('facebookId')}
            />

            <TouchableOpacity
              style={[styles.submit, styles.mTop32]}
              onPress={handleSubmit}>
              <Text style={styles.submit__text}>SAVE</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    </Formik>
  );
}
