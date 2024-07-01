import { View } from 'react-native';

import LLRHeader from './components/LLRHeader';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
    <View style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}>
    <View   style={{
      flex:1
      }}   >
      <LLRHeader />
      <WelcomeScreen/>
    </View>

      <View>
        <Footer/>
      </View>
    </View>
  );
}