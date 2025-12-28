import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { UserContext, UserContextType } from '../../../contexts/user-context'

const ContactFamilyScreen = () => {
  const context = useContext<UserContextType>(UserContext)
  const { userClicks } = context
  return (
    <View>
      <Text>ContactFamilyScreen</Text>
      <Text>{`Clicks hechos: ${userClicks}`}</Text>
    </View>
  )
}

export default ContactFamilyScreen

const styles = StyleSheet.create({})