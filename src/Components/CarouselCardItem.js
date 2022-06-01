
import React from 'react'
import { View, Text, Dimensions, Image } from "react-native"
import Styles from './Styles'
export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9)

const CarouselCardItem = ({ item }) => {
    
  return (
    <View style={Styles.container}>
      <Image
        source={{ uri: item.imgUrl }}
        style={Styles.image}
      />
      <Text style={Styles.header}>{item.title}</Text>
      <Text style={Styles.body}>{item.body}</Text>
    </View>
  )
}

export default CarouselCardItem
