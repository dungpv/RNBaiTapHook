import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../styles/styles'

export default function HeaderProfile() {
  return (
    <View style={styles.header}>
      <Image style={styles.header__image} source={{uri: 'https://i.pravatar.cc?u=nguyenvantest1@gmail.com'}} />
    </View>
  )
}