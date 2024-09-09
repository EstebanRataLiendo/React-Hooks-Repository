import { memo } from "react"

//memoriza el componente para solo volver a renderizarlo cuando cambia las propiedades
export const Small = memo(({value}) => {
    console.log('Se ha vuelto a dibujar')
  return (
    <small>{value}</small>
  )
})
