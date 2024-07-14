export default function Header(){
    return (
        <div className="flex p-5 justify-between bg-green-700 text-white items-center">
            <a href="#" className="font-bold">BULLMARKET</a>
            {/* <input className="rounded h-9 p-3 w-full max-w-3xl" type="text" placeholder="Search a product... "/> */}
            <form className='w-full max-w-3xl'>
                    <input
                        className="rounded h-9 p-3 w-full max-w-3xl"
                        id='search'
                        type='text'
                        role='searchbox'
                        placeholder='Search a product...'
                    />
            </form>
            <div>
                <p>Login</p>
                <p>Register</p>
            </div>
            
        </div>
    )
}