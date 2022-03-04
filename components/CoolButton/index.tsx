import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import type {FunctionComponent} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';

const CoolButton: FunctionComponent<{
  amount: number;
  onPress: () => void;
  theme: 'dark' | 'light';
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}> = ({children, amount, onPress, theme, style, containerStyle}) => {
  return (
    <TouchableOpacity
      testID="increaseAmount"
      style={[styles[`button-${theme}`], style]}
      containerStyle={containerStyle}
      onPress={onPress}>
      <View style={styles.container}>
        <View style={{flex: 1}}>{children}</View>
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 16,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  'button-light': {
    backgroundColor: '#5555EE',
  },
  'button-dark': {
    backgroundColor: '#CC2222',
  },
});

export default CoolButton;
