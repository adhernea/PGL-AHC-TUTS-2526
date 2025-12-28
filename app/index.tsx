import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import Drawer from 'expo-router/drawer'

const AppScreen = () => {
  const isUserLogged = true
  return (
    isUserLogged ?
      <Redirect href="/jokes" />
      :
      <Redirect href="/about" />
  )
}

export default AppScreen

const styles = StyleSheet.create({})