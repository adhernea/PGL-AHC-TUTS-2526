import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { jokesService } from '../../services/jokes-service'

const JokesScreen = () => {

  const [joke, setJoke] = useState<string>('¡Pincha en el botón para cargar una broma de programación!')

  const searchNewJoke = async () => {
    setJoke('CARGANDO NUEVA BROMA...')

    const jokeItem = await jokesService.getProgrammingJoke()

    if (jokeItem == null) {
      setJoke('Problema al cargar una gromita. Inténtalo de nuevo.')
      return
    }

    setJoke(jokeItem.message)
  }

  return (
    <View style={styles.container}>
      <Button title='Buscar nuevo chiste' onPress={searchNewJoke}></Button>
      <Text style={styles.joke}>{joke}</Text>
    </View>
  )
}

export default JokesScreen

const styles = StyleSheet.create({
  container: { width: '50%', height: '100%', alignSelf: 'center', justifyContent: 'space-around' },
  joke: { fontSize: 24 }
})