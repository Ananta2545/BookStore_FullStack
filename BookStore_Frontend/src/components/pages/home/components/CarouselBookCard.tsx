import { Link } from "react-router-dom"
import { BookModel } from "../../../../models/BookModel"

type BookCardProps = {
    book: BookModel
}

export const CarouselBookCard = ({ book }: BookCardProps) => {

    return (

        <div className="flex flex-col gap-5 items-center p-6 bg-white rounded-2xl shadow-lg card-hover">

            <div className="relative overflow-hidden rounded-xl">
                <img 
                    src={book.img} 
                    alt="cover" 
                    width={180} 
                    height={280} 
                    className="transition-transform duration-300 hover:scale-105"
                />
            </div>
            
            <div className="text-center">
                
                <p className="font-semibold text-lg text-slate-800">{book.title}</p>

                <p className="text-slate-500">{book.author}</p>
            
            </div>

            <Link to={`/book/${book.id}`} className="custom-btn-2 !py-2 !px-6 text-sm">
                View Details
            </Link>

        </div>

    )

}