import React, {useState} from 'react';
import {StyleSheet, View, Image,Text} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import styles from './styles';
import {MainImage, CameraIcon, MultipleIcon} from 'images';
import {Header, Button, GalleryButton, ImageGrid,Pills} from 'components';


const Index: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<ImageData[]>([]);
  const [isMultipleSelected, setIsMultipleSelected] = useState<boolean>(false);

  const openCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setIsMultipleSelected(false);
        setSelectedImages([{uri: image.path}]);
      })
      .catch(error => {
        console.log('openCamera-error', error);
      });
  };

  const handleImageSelect = (item: ImageData, isSelected: boolean) => {
    if (isMultipleSelected) {
      let selectedImagesTemp = [...selectedImages];
      if (isSelected) {
        selectedImagesTemp = selectedImagesTemp.filter(
          _item => _item.id !== item.id,
        );
      } else selectedImagesTemp.push(item);
      setSelectedImages(selectedImagesTemp);
    } else {
      setSelectedImages([item]);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Header headerText={'New Post'} hasNext={true} />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.mainImage}
            source={selectedImages?.[selectedImages.length-1] || MainImage}
          />
        </View>
        <View style={styles.buttonView}>
          <GalleryButton />
          <Button
            style={{marginLeft: 70}}
            label="Multiple"
            icon={MultipleIcon}
            isSelected={isMultipleSelected}
            onPress={() => setIsMultipleSelected(!isMultipleSelected)}
          />
          <Button
            style={{marginRight: 20}}
            label="Camera"
            icon={CameraIcon}
            onPress={openCamera}
          />
        </View>
        <View style={styles.galleryContainer}>
          <ImageGrid
            selectedImages={selectedImages}
            onImageSelect={handleImageSelect}
          />
        <View style={styles.pillsContainer}>
            <Pills/>
        </View>
        </View>
      </View>
    </View>
  );
};


export default Index;
