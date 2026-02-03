export const GrowingCollectionHero = () => {

    return (

        <section className="flex max-lg:flex-col w-full gap-8 items-stretch bg-white rounded-3xl shadow-lg overflow-hidden">
            
            <div className="lg:w-1/2 max-lg:h-80 bg-home-hero-3 bg-cover bg-no-repeat bg-bottom" />

            <div className="flex flex-col justify-center lg:gap-8 gap-6 lg:w-1/2 p-10 lg:p-12 max-lg:items-center max-lg:text-center">

                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 w-fit">
                    <span className="text-amber-700 text-sm font-medium">📚 Growing Daily</span>
                </span>

                <h2 className="text-3xl lg:text-4xl font-serif font-bold leading-tight text-slate-800">
                    Our collection is always growing!
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed">
                    Check in regularly as we're constantly adding new titles! 
                    We work passionately to bring you the most diverse book selection possible. 
                    Your reading journey is our top priority.
                </p>

                <div className="flex gap-6 mt-2">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="text-slate-700 font-medium">Weekly Updates</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="text-slate-700 font-medium">Curated Selection</span>
                    </div>
                </div>

            </div>

        </section>

    )

}