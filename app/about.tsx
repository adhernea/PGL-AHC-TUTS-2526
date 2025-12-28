import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const AboutScreen = () => {
  return (
    <View>
      <Text>about</Text>
      <Link href='/cards' style={styles.link}>
        ¡Navega a Cards!
      </Link>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  link: { textDecorationLine: 'underline', color: 'blue', fontSize: 18 }
})