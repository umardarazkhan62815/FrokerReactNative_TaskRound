import React, {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Index from './src/attachmentUpload/index'
const App: React.FC = () => {
 
 

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Index/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF9644',
  },
  imageContainer: {
    backgroundColor: '#EEEEEE',
    height: '50%',
    resizeMode: 'contain',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  mainImage: {
    height: '90%',
    width: '90%',
    marginTop: 30,
    borderRadius: 30,
  },
  buttonView: {
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
    height: '6%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default App;
