import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import {DownArrow} from 'images';

interface GalleryButtonProps {
  onPress?: () => void;
}

const GalleryButton: React.FC<GalleryButtonProps> = props => {
  const {onPress = () => {}} = props;
  return (
    <TouchableOpacity
      style={[styles.galleryButton, {marginLeft: 30}]}
      onPress={onPress}>
      <Text style={{color: 'black', fontSize: 15}}>{'Gallery'}</Text>
      <Image style={styles.downArrow} source={DownArrow} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  downArrow: {
    height: 15,
    width: 15,
    marginTop: 5,
    marginLeft: 5,
  },
  galleryButton: {
    flexDirection: 'row',
    height: 'auto',
    width: 'auto',
  },
});

export default GalleryButton;
