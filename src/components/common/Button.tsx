import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';

interface ButtonProps {
  label?: string;
  isSelected?: boolean;
  icon?: ImageSourcePropType | null;
  style?: any;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = props => {
  const {
    label = '',
    isSelected = false,
    icon = null,
    style = {},
    onPress = () => {},
  } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          {backgroundColor: isSelected ? '#EF9644' : '#EEEEEE'},
          style,
        ]}>
        {icon ? <Image style={styles.downArrow} source={icon} /> : null}
        <Text style={{color: 'black', fontSize: 15}}>{`${label}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 100,
    height: 35,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 30,
  },
  downArrow: {
    height: 15,
    width: 15,
    marginTop: 5,
    marginLeft: 5,
  },
});

export default Button;
