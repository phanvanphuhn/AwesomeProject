import {yupResolver} from '@hookform/resolvers/yup';
import * as React from 'react';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().required('Name is a required field'),
  })
  .required();

import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  dataSubmitActions,
  selectName,
} from '../store/reducers/dataSubmitReducer';

function HomeScreen({navigation}: any) {
  const {
    handleSubmit,
    control,
    formState: {errors},
  }: any = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const nameSelector = useSelector(selectName);

  const onSubmit = (data: any) => {
    // console.log(data);
    dispatch(dataSubmitActions.setName(data?.name));
    navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={val => onChange(val)}
            value={value}
            defaultValue={nameSelector}
          />
        )}
        name="name"
        rules={{required: true}}
      />
      <Text style={styles.textError}>{errors?.name?.message}</Text>

      <View style={styles.button}>
        <Button title="Next step" onPress={handleSubmit(onSubmit)} />
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

export default HomeScreen;
