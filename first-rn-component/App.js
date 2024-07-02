import { View } from 'react-native';

import LLRHeader from './components/LLRHeader';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';

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
      <MenuItems/>
    </View>

      <View>
        <Footer/>
      </View>
    </View>
  );
}