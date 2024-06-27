import { View } from 'react-native';

import LLRHeader from './components/LLRHeader';

export default function App() {
  return (
    <View style={{flex:1,justifyContent:"flex-start",padding:45}}>
      <LLRHeader/>
    </View>
  );
}