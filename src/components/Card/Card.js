import React from 'react';
import './card.css';

export const Card = ({detalles}) => {
   
    return (
        
        <div>
		 {detalles !== undefined ? (
            <div className='container d-flex justify-content-center mb-5'>
            <div className='d-flex flex-column gap-3'>
                <h1 className='text-center'> {detalles.name} </h1>

                <img className='img-fluid' src={detalles.image} alt=''/>

                <div className='content'>
                    <div className=''>
                        <span className='fw-bold'> Gender : </span>
                        {detalles.gender}
                    </div>
                    <div>
                        <span className='fw-bold'> Location : </span>
                        {detalles.location?.name}
                    </div>
                    <div className=''>
                        <span className='fw-bold'> Origin : </span>
                        {detalles.origin?.name}
                    </div>
                    <div className=''>
                        <span className='fw-bold'> Species : </span>
                        {detalles.species}
                    </div>
                </div>
           </div>
        </div>
		 ) : (
		 < span>No hay nada en el objeto</span>
		 )}
		</div>

        
    )
}
