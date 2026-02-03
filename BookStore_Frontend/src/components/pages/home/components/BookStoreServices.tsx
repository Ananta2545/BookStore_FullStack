import { Link } from "react-router-dom"
import { useAuthenticationContext } from "../../../../authentication/authenticationContext";

export const BookStoreServices = () => {

    const { authentication } = useAuthenticationContext();

    return (

        <div className="relative w-full rounded-3xl overflow-hidden">
            
            {/* Background Image */}
            <div className="absolute inset-0 bg-home-hero-4 bg-cover max-lg:bg-right" />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
            
            <div className="relative z-10 w-full flex items-center p-10 lg:p-16 min-h-[400px]">

                <div className="flex flex-col items-start lg:gap-8 gap-6 lg:w-1/2 max-lg:items-center max-lg:text-center max-lg:w-full">

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30">
                        <span className="text-purple-300 text-sm font-medium">💬 Community</span>
                    </span>

                    <h2 className="text-4xl max-lg:text-3xl font-serif font-bold leading-tight text-white">
                        Missing Something?
                    </h2>

                    <p className="text-lg text-slate-300 max-w-md">
                        We strive to make our collection perfect for everyone. 
                        Can't find what you're looking for? Start a discussion with our team!
                    </p>

                    <Link to={authentication.isAuthenticated ? "/discussions" : "/login"} type="button" className="custom-btn-2 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {authentication.isAuthenticated ? "Start Discussion" : "Sign in to Discuss"}
                    </Link>

                </div>

            </div>

        </div>

    )

}