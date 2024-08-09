import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUpScreen from './screens/SignUpScreen.js'
export default function App() {
  return (
    <View style={{ flex: 1 }}> {/* Make sure the View takes up the full screen */}
      <SignUpScreen />
    </View>
  );
}