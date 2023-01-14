import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets';

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView className="bg-white flex-1 relative" style={{
            marginTop: StatusBar.currentHeight,
        }}>
            {/* First section */}
            <View className="flex-row px-6 mt-8 items-center space-x-2">
                <View className="w-16 h-16 bg-black rounded-full items-center justify-center ">
                    <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
                </View>
                <Text className="text-[#2A2B4B] text-3xl font-semibold" >Travel</Text>
            </View>

            {/* Section section */}

            <View className=" px-6 mt-8 space-y-3 ">
                <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
                <Text className="text-[#00BCC9] text-[38px] font-bold">Good Moments</Text>
                <Text className="text-[#3C6072] text-base ">Hãy đến với chúng tôi nơi đáng được quý khách tin cậy.</Text>
            </View>

            {/* End section */}

            <View className="h-[350px] w-[350px] bg-[#00BCC9] absolute rounded-full bottom-36 -right-36 "></View>
            <View className="h-[350px] w-[350px] bg-[#E99265] absolute rounded-full -bottom-28 -left-36 "></View>
            <View className="flex-1 relative items-center justify-center ">
                <Image
                    source={HeroImage}
                    className="w-full h-full object-cover"
                />
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen