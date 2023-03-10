import { View, Text, TouchableOpacity, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ItemCard = ({ imgSrc, title, location, price, status, rating, priceLevel, bearing, description, cuisine, phone, email, address }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreen', {
                imgSrc: imgSrc,
                title: title,
                location: location,
                price: price,
                status: status,
                rating: rating,
                priceLevel: priceLevel,
                bearing: bearing,
                description: description,
                cuisine: cuisine,
                phone: phone,
                email: email,
                address: address,
            })}
            className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[182px] my-2">
            <Image
                source={{ uri: imgSrc }}
                className="w-full h-40 rounded-md object-cover"
            />
            <Text className="text-[#428288] text-[18px] font-bold">{title?.length > 14 ? `${title.slice(0, 14)}..` : title}</Text>
            <View className="flex-row items-center space-x-1">
                <FontAwesome name="map-marker" size={20} color="#8597A2" />
                <Text className="text-[#428288] text-[14px] font-bold">{title?.length > 18 ? `${title.slice(0, 18)}..` : location}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ItemCard