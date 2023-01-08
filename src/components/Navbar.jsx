export default function Navbar() {
    return (
        <div id="navbar" className="fixed w-full bg-gray-900 text-white flex items-center justify-between py-2 px-8">
            <div className="flex items-center m-1">
                <img src="favicon.ico" className="w-7" alt="" />
                <h2 className="pl-3 text-xl">BooksTown</h2>
            </div>
        </div>
    )
}
