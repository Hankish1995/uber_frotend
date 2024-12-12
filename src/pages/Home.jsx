import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <div className="bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1554672408-730436b60dde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dWJlcnxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400">
                <img className="w-14 ml-8" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber logo" />
                <div className="bg-white py-4 pb-7 px-4">
                    <h2 className="text-3xl mb-2 font-bold">
                        Get Started With Uber
                    </h2>
                    <Link to="/login" className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4">Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Home