import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Swiper from 'ro-react-native-swiper'

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
export default () => (
  <Swiper style={styles.wrapper} autoplay>
    //bannerList is an array that was requested by axios
     {bannerList.map((item, index) => {
                return (       
                    <Image
                      style={styles.slide1}
                      source={{uri: `${item.pictureUrl}`}}
                      resizeMode="contain"
                    />
                );
              })}
  </Swiper>
)
