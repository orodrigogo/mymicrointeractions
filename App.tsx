import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Fling } from './src/components/Fling';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Fling />
    </GestureHandlerRootView>
  );
}