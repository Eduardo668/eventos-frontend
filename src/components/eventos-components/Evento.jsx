import React from "react";


const Evento = ({ evento })=>{
     return (
         <>
            <div className=" relative m-[1.5rem] bg-gray-900 w-[23rem] rounded-[30px] h-[30rem]  ">
                <h3 className="text-white relative left-5">{evento.name}</h3>
            </div>
         </>
     )
}


export default Evento;