import {useContext} from 'react'
import Usercontext from '../../Context/Usercontext'

function Profile() {
    const { user } = useContext(Usercontext)

    if(!user)
    {
        return <>    
    <h2 className="text-center text-3xl font-bold leading-tight text-black">
    Please Login
    </h2>
    </>
    }else{
        return <>    
    <h2 className="text-center text-3xl font-bold leading-tight text-black">
    Welcome {user.user}
    </h2>
    </>
    }

}

export default Profile
