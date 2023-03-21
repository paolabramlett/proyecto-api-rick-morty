import React from "react";
import { CardItem } from "./CardItem";

export const Card2 = ({selectedCharacter}) => {
        
            return (
                <>
                {selectedCharacter.map((charter)=> (
                    <CardItem
                    key={charter.id}
                    charter = {charter} />
                ))}
                </>
            )
        
}