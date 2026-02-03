import { Link } from "react-router-dom"

export const FavouriteGenresHero = () => {

    return (

        <section className="flex max-lg:flex-col-reverse w-full gap-8 items-stretch bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl overflow-hidden border border-green-100">

            <div className="flex flex-col justify-center lg:gap-8 gap-6 lg:w-1/2 p-10 lg:p-12 max-lg:items-center max-lg:text-center">

                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 w-fit">
                    <span className="text-green-700 text-sm font-medium">🎯 Find Your Genre</span>
                </span>

                <h2 className="text-3xl lg:text-4xl font-serif font-bold leading-tight text-slate-800">
                    What's your favorite genre?
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed">
                    From romance to science fiction, mystery to fantasy — 
                    we've curated a collection that speaks to every reader's heart. 
                    Discover your next adventure today!
                </p>

                <div className="flex flex-wrap gap-3 mt-2">
                    <span className="px-4 py-2 rounded-full bg-white shadow-sm text-sm text-slate-600 font-medium">Romance</span>
                    <span className="px-4 py-2 rounded-full bg-white shadow-sm text-sm text-slate-600 font-medium">Sci-Fi</span>
                    <span className="px-4 py-2 rounded-full bg-white shadow-sm text-sm text-slate-600 font-medium">Mystery</span>
                    <span className="px-4 py-2 rounded-full bg-white shadow-sm text-sm text-slate-600 font-medium">Fantasy</span>
                    <span className="px-4 py-2 rounded-full bg-white shadow-sm text-sm text-slate-600 font-medium">+ More</span>
                </div>

                <Link to={"/search"} type="button" className="custom-btn-2 w-fit">
                    Browse All Genres
                </Link>

            </div>

            <div className="lg:w-1/2 max-lg:h-80 bg-home-hero-2 bg-cover bg-no-repeat bg-center" />

        </section>

    )

}