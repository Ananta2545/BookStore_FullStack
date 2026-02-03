import { useState } from "react"
import { BookModel } from "../../../../models/BookModel";
import { LoadingSpinner } from "../../../commons/loading_spinner/LoadingSpinner";
import { useFetchBooks } from "../../../../utils/api_fetchers/book_controller/useFetchBooks";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import { CarouselBookCard } from "./CarouselBookCard";
import { HttpErrorMessage } from "../../../commons/http_error_message/HttpErrorMessage";
import 'swiper/css/bundle';

export const Carousel = () => {

    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState<string | null>(null);

    useFetchBooks(1, setBooks, setIsLoading, setHttpError);

    return (

        <section className="flex flex-col items-center gap-12 w-full max-lg:px-5">
            
            <div className="flex flex-col items-center gap-4 text-center">

                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200">
                    <span className="text-green-700 text-sm font-medium">⭐ Featured Collection</span>
                </span>

                <h2 className="text-4xl max-lg:text-3xl font-serif font-bold leading-snug text-slate-800">
                    Popular books from our collection
                </h2>

                <p className="text-lg max-lg:text-base text-slate-500 max-w-xl">
                    Hand-picked titles that our readers love. These might be your next favorite read!
                </p>

            </div>

            {isLoading ? <LoadingSpinner /> :

                <>

                    {httpError ? <HttpErrorMessage httpError={httpError} /> :
                
                        <>

                            {/* Desktop Carousel */}

                            <Swiper modules={[Navigation, EffectCoverflow]} loop={true} navigation={true} slidesPerView={3} spaceBetween={0} 
                                effect={'coverflow'} coverflowEffect={{ rotate: 0,  stretch: -45, depth: 100, modifier: 1.5, slideShadows: false }} 
                                className="w-full max-w-[1100px] max-lg:hidden"
                            >

                                {books.map((book) => (

                                    <SwiperSlide className="flex items-center justify-center py-5" key={book.id}>
                                        
                                        <CarouselBookCard book={book} />

                                    </SwiperSlide>

                                ))}

                            </Swiper>


                            {/* Mobile Carousel */}

                            <Swiper modules={[Navigation]} loop={true} navigation={true} slidesPerView={1} spaceBetween={0} className=" w-5/6 lg:hidden">

                                {books.map((book) => (

                                    <SwiperSlide className="flex items-center justify-center" key={book.id}>
                                        
                                        <CarouselBookCard book={book} />

                                    </SwiperSlide>

                                ))}

                            </Swiper>

                        </>

                    }

                </>
            
            }
            
        </section>

    )

}