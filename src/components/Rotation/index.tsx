import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, Value, withTiming } from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

import { styles } from './styles';

export function Rotation() {
  const rotation = useSharedValue(0);

  const rotationGesture = Gesture
    .Rotation()
    .onUpdate((event) => {
      rotation.value = event.rotation;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${(rotation.value / Math.PI) * 180}deg` }],
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={rotationGesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </View>
  )
}