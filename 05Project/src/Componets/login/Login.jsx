import { useState, useContext } from 'react'
import Usercontext from '../../Context/Usercontext'

function Login() {
    const [user, setuser] = useState('')
    const [password, setpassword] = useState('')
    const handlelogin = (e) => {
        e.preventDefault()
        setUser({user, password})
    }
    const { setUser } = useContext(Usercontext)

    return (
        <div>
            <section>
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">

                        <h2 className="text-center text-2xl font-bold leading-tight text-black">
                            Sign In 
                        </h2>

                        <form action="#" method="POST" className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Full Name{' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            value={user}
                                            onChange={(e) => setuser(e.target.value)}
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Full Name"
                                            id="name"
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Password{' '}
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            value={password}
                                            onChange={(e) => setpassword(e.target.value)}
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="password"
                                            placeholder="Password"
                                            id="password"
                                        ></input>
                                    </div>

                                </div>
                                <div>
                                    <button
                                        onClick={handlelogin}
                                        type="button"
                                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                    >
                                        Sign-In
                                    </button>
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
