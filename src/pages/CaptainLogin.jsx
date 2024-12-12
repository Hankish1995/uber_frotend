import { useState } from "react"
import { Link } from "react-router-dom"

const CaptainLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const submitHandler = (e) => {
        e.preventDefault()
        setUserData({
            email: email,
            password: password
        })
        setEmail('')
        setPassword('')
    }
    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className="w-14 mb-8" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber logo" />
                <form onSubmit={(e) => submitHandler(e)}>
                    <h3 className="text-lg font-medium mb-2">What&apos;s Your Email</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="email"
                        placeholder="email@example.com"
                    />
                    <h3 className="text-lg font-medium mb-2">Enter Password</h3>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        required
                        placeholder="password"
                    />
                    <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">Login</button>
                </form>
                <p className="text-center">Join a fleet? <Link to='/captain-signup' className="text-blue-600">Register as a Captain</Link></p>
            </div>
            <div>
                <Link to='/login' className="bg-[#d5622d] text-white flex items-center justify-center font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">Sign in as User</Link>
            </div>
        </div>
    )
}

export default CaptainLogin