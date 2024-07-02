import { View, Text, ScrollView } from 'react-native';

const menuItemsToDisplay = [
  'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

export default function MenuItems() {
  return(
    <View style={{
      flex:0.75
    }}>
      <ScrollView style={{
        padding:40
      }}>
        <Text style={{
          color:'white',
          flexWrap:'wrap',
          fontSize:40
        }}>Menu Items</Text>
        <Text style={{
          color: '#F4CE14', fontSize: 36
        }}>
          {menuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>
  );
}