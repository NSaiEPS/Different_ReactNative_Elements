import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Alert_Toast from './Components/Alert_Toast';
import Buttons from './Components/Buttons';
import Image_ImageBackground from './Components/Image_ImageBackground';
import Model_CUstomAlert from './Components/Model_CUstomAlert';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Buttons/> */}

      {/* <Alert_Toast /> */}
      {/* <Model_CUstomAlert/> */}

      <Image_ImageBackground/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


