import { Link } from "react-router-dom"

export const BeginJourneyHero = () => {

    return (

        <section className="relative flex max-lg:flex-col lg:justify-between gap-12 w-full items-stretch mt-6 rounded-3xl overflow-hidden">

            {/* Background gradient overlay */}
            <div className="absolute inset-0 gradient-hero opacity-95 z-0" />
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-start lg:gap-10 gap-8 lg:w-1/2 p-10 lg:p-16 max-lg:items-center max-lg:text-center">

                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-300 text-sm font-medium">Over 10,000+ Books Available</span>
                </span>

                <h1 className="text-5xl max-lg:text-4xl font-serif font-bold leading-tight text-white">
                    Begin your next 
                    <span className="text-gradient"> adventure </span>
                    with our finest books
                </h1>

                <p className="text-xl max-lg:text-lg text-slate-300 max-w-md">
                    Search through our extensive library to find a book that will keep you up late into the night.
                </p>

                <div className="flex gap-4 flex-wrap">
                    <Link to={"/search"} type="button" className="custom-btn-2 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        Explore Books
                    </Link>
                    <Link to={"/register"} type="button" className="custom-btn-1 !bg-white/10 !text-white !border-white/20 hover:!bg-white/20">
                        Get Started Free
                    </Link>
                </div>

                {/* Stats */}
                <div className="flex gap-8 mt-4">
                    <div className="text-center">
                        <p className="text-3xl font-bold text-white">10K+</p>
                        <p className="text-slate-400 text-sm">Books</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-white">5K+</p>
                        <p className="text-slate-400 text-sm">Members</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-white">4.9</p>
                        <p className="text-slate-400 text-sm">Rating</p>
                    </div>
                </div>

            </div>

            {/* Hero Image */}
            <div className="relative z-10 lg:w-1/2 min-h-[400px] lg:min-h-[500px]">
                <div className="absolute inset-0 bg-home-hero-1 bg-cover bg-center rounded-l-3xl max-lg:rounded-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent max-lg:bg-gradient-to-b" />
            </div>

        </section>

    )

}