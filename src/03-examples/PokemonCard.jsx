import React from 'react'

export const PokemonCard = ({id, name, sprites = []}) => {

  return (
    <section style={{height:200}}>
        <h2 className='text-capitalize'>#{id}-{name} </h2>
        <img src={sprites} alt={name} className=' img-thumbnail m-4  '/>
        <div></div>
    </section>
  )
}
