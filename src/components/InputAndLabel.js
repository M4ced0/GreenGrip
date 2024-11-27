import { Text, View, StyleSheet, TextInput } from 'react-native';

export default function LabelAltura(props){
  return (
    <View style={styles.container}>
      <Text style={styles.labelAltura}>
        {props.texto}
      </Text>
      <TextInput style={styles.inputAltura}
        autoCapitalize="none"
        placeholder={props.name}
        keyboardType="numeric"
        onChangeText={props.onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '0.5rem'
  },

  labelAltura: {
    marginRight: '0.6rem',
    color: 'white',
  }
});