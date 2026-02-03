import gitLogo from "../../../assets/icons/github-logo-teal.svg";
import linkedInLogo from "../../../assets/icons/linkedin-logo-teal.svg";
import bookStoreLogo from "../../../assets/images/BookStore_Logo.png";

export const Footer = () => {

    return (

        <footer className="w-full bg-slate-900 relative">

            <div className="max-w-[1440px] mx-auto py-16 px-8">

                <div className="w-full flex max-lg:flex-col max-lg:gap-12 items-start justify-between">

                    {/* Brand Section */}
                    <div className="flex flex-col gap-6 lg:w-1/3 max-lg:items-center max-lg:w-full">
                        <div className="flex items-center gap-3">
                            <img className="w-14 h-auto" src={bookStoreLogo} alt="bookStoreLogo" />
                            <span className="font-serif text-2xl font-bold text-white">Book Store</span>
                        </div>
                        <p className="text-slate-400 text-sm max-lg:text-center max-w-xs">
                            Discover your next favorite book from our curated collection. Reading opens doors to new worlds.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="flex flex-col gap-4 lg:w-1/3 max-lg:items-center max-lg:w-full">
                        <h3 className="text-white font-semibold text-lg mb-2">Contact Us</h3>
                        <div className="flex flex-col gap-2">
                            <a href="mailto:support@bookstore.com" className="text-slate-400 hover:text-green-400 transition-colors text-sm">
                                support@bookstore.com
                            </a>
                            <a href="mailto:admin@bookstore.com" className="text-slate-400 hover:text-green-400 transition-colors text-sm">
                                admin@bookstore.com
                            </a>
                        </div>
                    </div>

                    {/* Social Section */}
                    <div className="flex flex-col gap-4 lg:w-1/3 lg:items-end max-lg:items-center max-lg:w-full">
                        <h3 className="text-white font-semibold text-lg mb-2">Follow Us</h3>
                        <div className="flex gap-4">
                            <a 
                                href={import.meta.env.VITE_GITHUB_LINK} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                            >
                                <img className="w-6 h-6 invert opacity-70" src={gitLogo} alt="GitHub" />
                            </a>
                            <a 
                                href={import.meta.env.VITE_LINKEDIN_LINK} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                            >
                                <img className="w-6 h-6 invert opacity-70" src={linkedInLogo} alt="LinkedIn" />
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        
            {/* Bottom Bar */}
            <div className="border-t border-slate-800 py-6 px-8">
                <div className="max-w-[1440px] mx-auto flex max-md:flex-col gap-4 items-center justify-between text-sm text-slate-500">
                    <p>© 2024 Book Store. All rights reserved.</p>
                    <p>Crafted with ❤️ for book lovers</p>
                </div>
            </div>
        
        </footer>

    )

}