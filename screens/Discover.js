import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Avatar, Hotels, Restaurants, Attractions } from '../assets';
import MenuContainer from '../components/MenuContainer';

export default function Discover() {
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
          <MenuContainer
            key={"hotel"}
            title="Hotels"
            imgSrc={Hotels}
          />
          <MenuContainer
            key={"res"}
            title="Restaurants"
            imgSrc={Restaurants}
          />
          <MenuContainer
            key={"attr"}
            title="Attractions"
            imgSrc={Attractions}
          />
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
