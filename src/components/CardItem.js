import React from "react";

export const CardItem = ({charter}) => {
    return (
        <div className="card">
            <img src={charter.image} alt={charter.name} />
            <div className="card-body">
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
    )
}