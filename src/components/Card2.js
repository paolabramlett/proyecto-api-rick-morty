import React from "react";


const CardItem = ({name, status, species, gender, location, origin, imageUrl}) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={name} />
            <div className="card-body">
                <h5 className="card-title">
                    {name}
                </h5>
                <hr />
                <p>
                    Status: {status}
                </p>
                <p>
                    Species: {species}
                </p>
                <p>
                    Gender: {gender}
                </p>
                <p>
                    Last location: {location}
                </p>
                <p>
                    Origin: {origin}
                </p>
            </div>
        </div>
    )
}

export const Card2 = (selectedCharacter) => {
    return (
        selectedCharacter.map((character) => {
            return (
                <CardItem itemData = {character} />
            )
        })
    )
}