import { View, Text } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={{}}>
    <Text 
      style={{
        fontSize:40,
        textAlign:'center',
        color: 'white',
        padding:30
      }}>
    Welcome to Little Lemon
    </Text>
      <Text
        style={{
          fontSize: 28,
          color: 'white',
          textAlign: 'center',
          padding:10
        }}>
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
      </Text>
    </View>
  );
}
