import React, { useState } from 'react'

const Contacto = () => {

    const [usuarios,setUsuarios] = useState({
        nombre: "",
        email: ""
    })

  

    const [validador_1,setValidador_1] = useState(0)
    const [validador_2,setValidador_2] = useState(0)
    const [validador_3,setValidador_3] = useState(0)




const handleChange = (e,propiedad) =>{
setUsuarios({...usuarios, [propiedad]: e.target.value})
}

const handleSubmit = (e) =>{
    e.preventDefault()

    setValidador_1(0)
    setValidador_2(0)
    setValidador_3(0)


let validarNombre = `${usuarios.nombre}`
if(validarNombre.length < 5){
   console.log("El nombre tiene menos de 5 letras")  
}else{
    console.log("El nombre es Correcto")
    setValidador_1(1)
    
}

const validarEmail_1 = usuarios.email.includes("@")
if(validarEmail_1){
    console.log("Correo correcto")   
    setValidador_2(1)
}else{
    console.log("Porfavor digite el correo correctamente")
}

const validarEmail_2 = usuarios.email.includes(".")
if(validarEmail_2){
    console.log("Correo correcto")
    setValidador_3(1)
}else{
    console.log("Porfavor digite el correo correctamente")
}






}

console.log(usuarios)

  return (
    <div>
        Contacto
        
        <form onSubmit={handleSubmit}>
             <input
             placeholder='Digite Nombre'
             name='nombre'
             onChange={(e)=> handleChange(e,"nombre")}
             />

             <input
             placeholder='Digite Email'
             name='email'
             onChange={(e)=> handleChange(e,"email")}
             />

                 <button>Enviar</button>
        </form>

                  
{
    validador_1 === 1 && validador_2 === 1 && validador_3 === 1 ? 
    
    (
    <div>            
     Gracias: {usuarios.nombre}, te contactaremos cuanto antes via email.
      </div>
    )
    
    :
    
    (
        
        ""
        
    )
}


                  
            
    </div>
  )
}

export default Contacto