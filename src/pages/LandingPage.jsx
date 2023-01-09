export default function LandingPage() {
    return (
        <div id="landing_page" className="flex items-center justify-center min-h-screen px-8 flex-wrap">

            <div className="m-5 space-y-5">
                <span></span>
                <h1 id="title" className="text-5xl font-bold">BooksTown</h1>
                <p className="my-2 text-lg text-center">Best place for buying and selling second hand books.</p>
                <div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6 py-3">    
                        Start Buying
                    </button>
                    <button className="bg-red-500 ml-5 hover:bg-red-600 text-white rounded-xl px-6 py-3">    
                        Start Selling
                    </button>
                </div>
            </div>

            <img className="w-[30rem] my-10 m-5" src="landing-img.png" alt="" />

        </div>
    )
}
