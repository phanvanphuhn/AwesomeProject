import * as React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    email: yup.string().email('Invalid email address'),
  })
  .required();

import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  dataSubmitActions,
  selectEmail,
} from '../store/reducers/dataSubmitReducer';

function DetailScreen() {
  const {
    handleSubmit,
    control,
    formState: {errors},
  }: any = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const emailSelector = useSelector(selectEmail);

  const onSubmit = (data: any) => {
    // console.log(data);
    dispatch(dataSubmitActions.setName(data?.name));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={val => onChange(val)}
            value={value}
          />
        )}
        name="email"
        rules={{required: true}}
        defaultValue={emailSelector}
      />
      <Text style={styles.textError}>{errors?.email?.message}</Text>

      <View style={styles.button}>
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    // color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    // color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    // backgroundColor: '#0e101c',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  textError: {
    color: 'red',
  },
});

export default DetailScreen;
