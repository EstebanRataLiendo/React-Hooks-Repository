import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {

  const {user} =useContext(UserContext)

    return (
      <>
          <h1>HomePage</h1>
          <hr />
          <h4>
            { JSON.stringify(user) }
          </h4>
      </>
    )
  }