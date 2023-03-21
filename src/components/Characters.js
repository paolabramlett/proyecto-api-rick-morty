import React from "react";



const Characters = ({characters = []}) => {

    const showCharacter = () => {
        return (
            <div>
                <p></p>
            </div>
        )
    }

    const handleCharacter = (event) => { 
        event.preventDefault()
        console.log('button clicked')
        showCharacter();
    }
    return (
        <div className="row">
            {
                characters.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card" style={{maxWidth: "200px"}} >
                            <img src={item.image} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {item.name}
                                </h5>
                                <hr />
                                <p>
                                    Species: {item.species}
                                </p>
                                <p>
                                    Location: {item.location.name}
                                </p>
                                <button className="btn btn-primary" onClick={handleCharacter} >View info</button>
                                <div>
                                {JSON.stringify(characters.data)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    )
}

export default Characters;

