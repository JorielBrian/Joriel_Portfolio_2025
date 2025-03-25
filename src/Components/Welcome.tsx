const Welcome = () =>{
    return (
        <div id="home" className="flex justify-between w-full m-10 px-20 ml-0 h-screen">
            <div className="justify-items-start font-sans">
                <h1 className="text-8xl">Joriel Brian Sudario</h1>
                <h2 className="text-6xl bg-gradient-to-r from-neutral-400 via-cyan-500 to-blue-800 bg-clip-text text-transparent">Junior Developer</h2>
                <p className="text-2xl">React, Typescript, TailwindCSS</p>
            </div>
            <div id="myImage">
                <img src="/Profile Picture.jpg" alt="My Image" className="size-120 rounded-full"/>
            </div>
        </div>
    );
}
export default Welcome;