import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, Value, withTiming } from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

import { styles } from './styles';

export function LongPress() {
  const size = useSharedValue(100);

  const longPressGesture = Gesture
    .LongPress()
    .onTouchesDown(() => {
      size.value = withTiming(size.value + 200, { duration: 500 });
    })
    .onEnd((e, success) => {
      if (success) {
        console.log(`Duração: ${e.duration} ms.`);
        size.value = withTiming(100, { duration: 500 });
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    width: size.value,
    height: size.value
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={longPressGesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </View>
  )
}