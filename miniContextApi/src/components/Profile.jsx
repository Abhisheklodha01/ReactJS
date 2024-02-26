import React, {useContext} from 'react'
import userContext from '../Context/UserContext.js'

const Profile = () => {

    const {user} = useContext(userContext)

    if (!user) {
      return <div>Please Login</div>
    }

    return <div>Welcome {user.username}</div>
     
}

export default Profile