import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';

import {BackIcon} from 'images';

interface HeaderProps {
  headerText?: string;
  onBackPress?: () => void;
  onNextPress?: () => void;
  hasNext?: boolean;
}

const Header: React.FC<HeaderProps> = props => {
  const {
    headerText = '',
    onBackPress = () => {},
    onNextPress = () => {},
    hasNext = false,
  } = props;

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onBackPress}>
        <Image
          source={BackIcon as ImageSourcePropType}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>{`${headerText}`}</Text>
      {hasNext && (
        <TouchableOpacity onPress={onNextPress}>
          <Text style={styles.nextText}>{'Next'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#EF9644',
    height: 70,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIcon: {
    height: 27,
    width: 27,
    marginLeft: 15,
    tintColor: 'white',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
  },
  nextText: {
    fontSize: 20,
    color: 'white',
    marginRight: 15,
  },
});

export default Header;
