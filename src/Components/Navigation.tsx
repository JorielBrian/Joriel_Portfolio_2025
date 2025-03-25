const Navigation = () =>{
    return (
        <>
        <div className="flex sticky top-0 w-full px-20 py-10 rounded-sm justify-between">
            <div>
                <img src="/logo.png" alt="JB logo" className=" size-40"/>
            </div>
            <ul className="flex relative py-auto">
                <li className="h-10 w-20 m-1 p-1 rounded-2xl hover:underline text-center"><a href="#Home">Home</a></li>
                <li className="h-10 w-20 m-1 p-1 rounded-2xl hover:underline text-center"><a href="#About">About</a></li>
                <li className="h-10 w-20 m-1 p-1 rounded-2xl hover:underline text-center"><a href="#Contact">Contact</a></li>
            </ul>
        </div>
        </>
    );
}
export default Navigation;