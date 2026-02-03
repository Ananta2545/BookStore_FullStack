export const LoadingSpinner = () => {

    return (

        <div className="flex flex-col items-center justify-center gap-4 p-10">

            <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-slate-200"></div>
                <div className="w-16 h-16 rounded-full border-4 border-green-500 border-t-transparent animate-spin absolute top-0 left-0"></div>
            </div>

            <p className="text-slate-500 font-medium animate-pulse">Loading...</p>

        </div>

    )

}