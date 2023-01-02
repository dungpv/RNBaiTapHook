import { View, Text , Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/styles'
import { ICONS } from '../../../common/Constant'

export default function Appbar() {
    return (
        <View style={styles.appbar}>
          <TouchableOpacity>
            <Image style={styles.icon} source={ICONS.iconBack} resizeMode='contain'/>
          </TouchableOpacity>
          <Text style={styles.appbar__title}>Profile</Text>
          <TouchableOpacity>
            <Image style={styles.icon} source={ICONS.iconList} resizeMode='contain'/>
          </TouchableOpacity>
        </View>
    )
}