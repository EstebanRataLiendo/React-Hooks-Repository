import React from 'react'
import { useCounter, useFetch } from '../hooks/'
import { LoadingMessage } from './LoadingMessage'
import { PokemonCard } from './PokemonCard'

export const MultipleCustomHook = () => {

    const {counter, decrement, increment, final, inicio} = useCounter(1)

    const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)


  return (
    <>
        <h1>Información de Pókemon</h1>
        <hr />
        {/* <pre> {JSON.stringify(data, null, 2)} </pre> */}
        {isLoading ? 
        <LoadingMessage /> :
        <PokemonCard 
            id={counter} 
            name={data.name} 
            sprites={data.sprites.front_default} 
        /> }
        <button 
            className='btn btn-outline-dark m-4' 
            onClick={() => counter > 1 ? decrement() : final()}
            >Anterior
        </button>
        <button 
            className='btn btn-outline-dark m-4' 
            onClick={() => counter < 1025 ? increment() : inicio()}
            >Siguiente
        </button>

    </>
  )
}
