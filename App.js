import React from 'react';
import {SafeAreaView, StyleSheet, Button} from 'react-native';
import {VESDK} from 'react-native-videoeditorsdk';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Open Video Editor"
        onPress={() => VESDK.openEditor(require('./ForBiggerBlazes.mp4'))}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
