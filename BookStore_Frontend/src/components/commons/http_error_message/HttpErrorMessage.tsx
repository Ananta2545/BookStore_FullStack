type HttpErrorMessageProps = {
    httpError: string | null
}

export const HttpErrorMessage = ({ httpError }: HttpErrorMessageProps) => {

    return (

        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 border border-red-200">
            
            <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            
            <span className="text-red-600 text-sm">{httpError}</span>
            
        </div>

    )

}