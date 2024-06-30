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
      }}   >
      <LLRHeader />
      <WelcomeScreen/>
    </View>

      <View style={{top:290}}>
        <Footer/>
      </View>
    </View>
  );
}