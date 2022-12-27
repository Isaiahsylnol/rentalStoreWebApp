import React from 'react'
import { ButtonBase } from '@mui/material';

export const SimilarMoviesWidget = ({data}) => {
  return (
    <div className=''>
        <h3 className="text-xl font-bold text-white">Similar Movies</h3>
                  <div className="">
                    <ul className="text-left">
                      {data.map(function (movie, i) {
                        return (
                          <li
                            key={i}
                            className="p-4 h-auto text-white font-semibold"
                          ><ButtonBase href={`/detail/${movie._id}`}>
                           <img src={require('../assets/uncahrted.jpg')} alt='similar movie thumbnails'/>
                        </ButtonBase>
                        <h1 className='text-white'>{movie.title}</h1>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
    </div>
  )
}
