import { quotes } from "../../../constants/constants";

type QuoteProps = {
    quoteId: number;
}

export const Quote = ({ quoteId }: QuoteProps) => {

  return (

    <div className="flex flex-col items-center gap-6 mt-1 max-lg:mt-3 w-full">

        <div className="flex gap-4 w-full items-center justify-center">
            
            <div className="h-[2px] lg:w-[200px] max-lg:w-1/4 bg-gradient-to-r from-transparent to-green-500" />
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-glow" />
            <div className="h-[2px] lg:w-[200px] max-lg:w-1/4 bg-gradient-to-l from-transparent to-green-500" />

        </div>

        <div className="text-center px-6 max-w-3xl">

            <p className="italic text-slate-600 text-lg leading-relaxed">"{quotes[quoteId].text}"</p>
            <p className="text-slate-500 mt-2 font-medium">— {quotes[quoteId].author}</p>

        </div>
        
    </div>

  )

}