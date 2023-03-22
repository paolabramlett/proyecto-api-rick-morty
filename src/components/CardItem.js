import React, {useEffect, useState} from 'react';
import { fetchIndividual } from './fetchIndividual';
import { Card } from './Card/Card';



export const CardItem = ({selectedCharacter}) => {
    const [detalle, setDetalle] = useState({})
    const [idDinamico, setIdiDinamico] = useState('1')
    useEffect(() => {
        fetchIndividual(idDinamico)
         .then((respuesta) => {
            setDetalle(respuesta)
         })
       }, [idDinamico])
       console.log({detalle})
    return (
        <>
        <div className='col col-10 d-flex flex-wrap'>
        {selectedCharacter.map((charter)=> (
        <div className="card " style={{ width:'150px'}} key={charter.id}>
            <img src={charter.image} alt={charter.name} id={charter.id} onClick={() => setIdiDinamico(charter.id)}/>
            <div className="card-body " >
                <h5 className="card-title">
                    {charter.name}
                </h5>
                <hr />
                <p>
                    Status: {charter.status}
                </p>
                <p>
                    Species: {charter.species}
                </p>
                <p>
                    Gender: {charter.gender}
                </p>
                <p>
                    Last location: {/*charter.location*/}
                </p>
                <p>
                    Origin: {/*charter.origin*/}
                </p>
            </div>
        </div>
        ))}
        </div>
        <div className='col col-2'>
            <div className='container mt-5'>
            <Card detalles={detalle}/>
            </div>
        </div>
        </>
    )
}