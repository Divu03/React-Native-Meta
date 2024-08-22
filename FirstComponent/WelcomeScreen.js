import { ScrollView, Text, StyleSheet, TextInput, Image, View } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
      <Image 
          source={require('./img/logo.png')} 
          style={styles.image}
          resizeMode='contain'
        />
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      </View>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: .5,
  },
   headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
    image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});