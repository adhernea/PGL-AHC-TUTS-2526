import { JokeItem } from "../types/Joke"
import { JokeResponse } from "../types/JokeResponse"

// Web para parsear JSON a objetos de Typescript:
// https://transform.tools/json-to-typescript

const API_URL = ' https://v2.jokeapi.dev/joke'

const getProgrammingJoke = async (): Promise<JokeItem | null> => {
    const response = await fetch(`${API_URL}/Programming`)

    const jokeResponse: JokeResponse = await response.json()

    if (jokeResponse.error) {
        console.log(jokeResponse)
        return null
    }

    if (jokeResponse.type == 'twopart') {
        jokeResponse.joke = jokeResponse.setup + '\n' + jokeResponse.delivery
    }

    const newJokeItem: JokeItem = {
        id: jokeResponse.id,
        message: jokeResponse.joke
    }

    return newJokeItem;
}

const getJokeByCategory = (category: string) => {

}

export const jokesService = {
    getProgrammingJoke,
    getJokeByCategory
}
