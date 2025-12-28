import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { UserContext, UserContextType } from '../../contexts/user-context'

const SettingsScreen = () => {
  const context = useContext<UserContextType>(UserContext)
  const { userInfo, addUserClick } = context

  return (
    <View>
      <Text>Settings</Text>
      <Text>{`Nombre: ${userInfo.username}`}</Text>
      <Text>{`Email: ${userInfo.email}`}</Text>
      <Button onPress={addUserClick} title='¡Añade una unidad!'></Button>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})