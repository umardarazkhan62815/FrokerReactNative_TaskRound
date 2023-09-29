import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import styles from '../../attachmentUpload/styles';
import {DownArrow, CameraIcon, Shots, Reel} from 'images';

interface PillsButtonProps {
  onPress?: () => void;
}

interface ButtonData {
  id: string;
  label: string;
  image: string;
}
const Pills: React.FC<PillsButtonProps> = props => {
  const {onPress = () => {}} = props;
  const data: ButtonData[] = [
    {id: '1', label: 'Photo', image: CameraIcon},
    {id: '2', label: 'Shots', image: Shots},
    {id: '3', label: 'Reels', image: Reel},
  ];
  const [selectedButton, setSelectedButton] = useState<string | null>(
    data[0].id,
  );

  const handleButtonClick = (id: string) => {
    setSelectedButton(id);
  };

  const renderItem = ({item}: {item: ButtonData}) => (
    <TouchableOpacity
      onPress={() => handleButtonClick(item.id)}
      style={[
        styles.button,
        selectedButton === item.id ? styles.selectedButton : null,
      ]}>
      <Image
        source={item.image}
        style={{width: 20, tintColor: '#fff', marginRight: 10, height: 20}}
      />
      <Text style={styles.buttonText}>{item.label}</Text>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal={true}
    />
  );
};

export default Pills;
