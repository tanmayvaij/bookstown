export default function LandingPage() {
    return (
        <div id="landing_page" className="space-y-12 flex items-center justify-center min-h-screen px-8 flex-col">

            <span></span>

            <div className="m-5 space-y-5 flex flex-col items-center justify-center">

                <span></span>

                <h1 id="title" className="text-5xl font-bold">BooksTown</h1>

                <p className="my-2 text-lg text-center">Best place for buying and selling second hand books.</p>

            </div>

            <div className="w-full flex flex-col space-y-3">
                <button id="buy_btn" className="landing_buttons bg-blue-500 hover:bg-blue-600 text-white rounded-xl px-6 py-4">    
                    Start Buying
                </button>
                <button id="sell_btn" className="landing_buttons bg-green-500 hover:bg-green-600 text-white rounded-xl px-6 py-4">    
                    Start Selling
                </button>
            </div>
            

            <img className="w-[30rem]" src="landing-img.png" alt="" />

        </div>
    )
}
