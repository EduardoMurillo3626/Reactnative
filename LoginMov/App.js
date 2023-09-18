import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Componet/Login';
import SignUp from './Componet/SignUp';
import ForgotPass from './Componet/ForgotPass';
import ChangePass from './Componet/ChangePass';

export default function App() {
  return (
    <View style={styles.container}>
      <ChangePass></ChangePass>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
