import React, { useEffect, useState, useRef } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import axios from 'axios'
import Movie from '../Movie.jsx/Movie';

const Row = ({title, url}) => {
    const [movies, setMovies] = useState([]);
    const sliderRef = useRef(null);
    useEffect(() => {
        axios.get(url).then(res =>{
            setMovies(res.data.results)
        })
    }, [url])

    const slideLeft = () => {
        sliderRef.current.scrollBy({ left: -500, behavior: 'smooth' });
    };
    const slideRight = () => {
        sliderRef.current.scrollBy({ left: 500, behavior: 'smooth' });
    };
  return (
    <div>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0' size={40} />
            <div ref={sliderRef} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item) =>
                    <Movie key={item.id} item={item}/>
                )}
            </div>
            <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0' size={40} />
        </div>

    </div>
  )
}

export default Row