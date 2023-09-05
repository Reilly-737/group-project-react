import React, {useState, useEffect} from "react";
import MakeUpCard from "./MakeUpCard";



function MakeUpList (){
   

const [makeups, setMakeup] = useState ([])


const makeupCards = makeups.map((makeup) => {
    return (
        <MakeUpCard 
        key={makeup.id}
         name={makeup.name}
          image_link={makeup.image_link}
           brand={makeup.brand}
            price={makeup.price}
             description={makeup.description}
              rating={makeup.rating}
              />
    )
})
       return <ul className="cards">

{makeupCards}
        </ul>
   } ;


export default MakeUpList;
