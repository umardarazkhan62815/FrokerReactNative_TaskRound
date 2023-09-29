import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useImageLoader } from '../../hooks/useCameraGalleryPermission';
export interface ImageData {
  uri: string;
  id?: string | number; // Assuming each image can have an ID
}

interface ImageGridProps {
  onImageSelect: (
    image: {id: string; uri: string},
    isSelected: boolean,
  ) => void;
  selectedImages: Array<ImageData>;
}

const ImageGrid: React.FC<ImageGridProps> = props => {
  const {onImageSelect = () => {}, selectedImages = []} = props;

  // const [imageData, setImageData] = useState<Array<{id: string; uri: string}>>(
  //   [],
  // );

  const imageData = useImageLoader();

  return (
    <View style={styles.container}>
      <FlatList
        data={imageData}
        renderItem={({item}) => {
          const foundedIndex = selectedImages.findIndex(
            _item => _item.id === item.id,
          );
          const isSelected = foundedIndex > -1;
          return (
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => onImageSelect(item, isSelected)}>
              <Image
                source={{uri: item.uri}}
                style={[styles.image, isSelected ? styles.selectedImage : {}]}
              />
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;
const imageSize = screenWidth / 3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    width: '95%',
    alignSelf: 'center',
  },
  gridItem: {
    width: '33%',
    alignItems: 'center',
    height: imageSize,
  },
  image: {
    width: '97%',
    height: '97%',
  },
  selectedImage: {
    opacity: 0.2,
  },
});

export default ImageGrid;
