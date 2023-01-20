import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Avatar, Hotels, Restaurants, Attractions } from '../assets';
import MenuContainer from '../components/MenuContainer';
import category from '../api/category';
import location from '../api/location';
import { FontAwesome } from '@expo/vector-icons';
import ItemCard from '../components/ItemCard';

export default function Discover() {

  const listCategory = () => {
    return category.map(element => {
      return (
        <MenuContainer
          key={element.key}
          title={element.title}
          imgSrc={element.img}>
        </MenuContainer>
      );
    });
  };
  const listLocation = () => {
    return location.map(element => {
      return (
        <ItemCard
          key={element.key}
          title={element.title}
          imgSrc={element.imgSrc}
          location={element.location}
          price={element.price}
          status={element.status}
          rating={element.rating}
          priceLevel={element.priceLevel}
          bearing={element.bearing}
          description={element.description}
          cuisine={element.cuisine}
          phone={element.phone}
          email={element.email}
          address={element.address}
        >
        </ItemCard >
      )
})
  }
const navigation = useNavigation();

useLayoutEffect(() => {
  navigation.setOptions({
    headerShown: false
  })
}, [])
return (
  <SafeAreaView
    className="flex-1 bg-white relative"
    style={{ marginTop: StatusBar.currentHeight }}>
    <View className="flex-row items-center justify-between px-8">

      <View>
        <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
        <Text className='text-[#527273] text-[36px]'>the beauty today</Text>
      </View>

      <View className='w-12 h-12 bg-gray-500 rounded-md items-center justify-center shadow-lg'>
        <Image
          className='w-full h-full rounded-md object-fill'
          source={Avatar}
        />
      </View>
    </View>

    <View
      style={styles.shadow}
      className=" shadow-lg items-center mx-4 rounded-xl py-1 px-4 h-10 mt-4 ">
      <TextInput
        className="w-full "
        placeholder="Search here..."
      />
    </View>

    <ScrollView>
      <View className=" flex-row items-center justify-between px-8 mt-8">
        {listCategory()}
      </View>

      <View>
        <View className="flex-row items-center justify-between px-4 mt-8">
          <Text className="text-[#2C7379] text-[28px] font-bold">Top Tips</Text>
          <TouchableOpacity className="flex-row items-center justify-center space-x-2">
            <Text className="text-[#A0CAC7] text-[20px] font-bold">Explore</Text>
            <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
          </TouchableOpacity>
        </View>

        <View className='px-4 mt-8 flex-row items-center justify-evenly flex-wrap'>
          {listLocation()}
        </View>
      </View>


    </ScrollView>
  </SafeAreaView>
)
}

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  }
});
