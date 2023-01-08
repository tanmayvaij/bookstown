export default function LandingPage() {
    return (
        <div id="landing_page" className="flex items-center justify-center min-h-screen flex-col px-8">
            <h1 className="text-5xl font-bold">BooksTown</h1>
            <p className="my-2 text-lg text-center">Best place for second hand books.</p>
            <img className="w-[30rem] my-10" src="landing-img.png" alt="" />
            <button className="bg-red-500 hover:bg-red-600 text-white rounded-xl px-6 py-3">Get Started</button>
        </div>
    )
}
