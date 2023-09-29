// useImageLoader.ts
import {useEffect, useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

interface ImageData {
  id: string;
  uri: string;
}

export function useImageLoader(): ImageData[] {
  const [imageData, setImageData] = useState<ImageData[]>([]);

  useEffect(() => {
    const requestStoragePermission = async () => {
      const permission =
        Platform.Version >= 33
          ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
          : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
      const hasPermission = await PermissionsAndroid.check(permission);
      console.log(hasPermission);

      const status = await PermissionsAndroid.request(permission);

      if (status == 'granted') {
        const loadImagesFromFS = () => {
          CameraRoll.getPhotos({
            first: 100,
            assetType: 'Photos',
          })
            .then(r => {
              // r.edges[1]?.node.image.uri;
              const formattedImages = r.edges.map((item, index) => ({
                id: index,
                uri: item.node.image.uri,
              }));

              setImageData(formattedImages);
            })
            .catch(err => {
              //Error Loading Images
            });
        };
        loadImagesFromFS();
      }
    };
    requestStoragePermission();
  }, []);

  return imageData; // Return the loaded images
}
