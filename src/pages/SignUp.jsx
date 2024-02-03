import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';

const SignUp = () => {

  const [formData,setFormData] = useState({
    fullName:'',email:'',password:''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.fullName,
            }
          }
        }
      )
      if (error) throw error
      alert('Verifique su email por favor')

      
    } catch (error) {
      alert(error)
    }
  }




  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
            <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
              <div className="w-full px-6 py-3">
                <div>
                  <div className="mt-3 text-left sm:mt-5">
                    <div className="inline-flex items-center w-full">
                      <h3 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-5xl">Registrar Cuenta</h3>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <div>
                    <label htmlFor="email" >Nombre Completo</label>
                    <input type="text" name="fullName" id="email" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Ingresa su nombre completo" onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="email" >Email</label>
                    <input type="text" name="email" id="email" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Ingresa un email" onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="password" >Contraseña</label>
                    <input type="password" name="password" id="password" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Ingresa una contraseña" onChange={handleChange}/>
                  </div>
                  <div className="flex flex-col mt-4 lg:space-y-2">
                    <button type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Registrar Cuenta</button>
                    <p>Ya tienes una cuenta? <Link to='/' className="text-rose-700">Iniciar Sesión</Link></p>
                  </div>
                </div>
              </div>
              <div className="order-first hidden w-full lg:block">
                <img className="object-cover h-full bg-cover rounded-l-lg" src="https://static.vecteezy.com/system/resources/thumbnails/005/879/539/small/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </form>

    </div>
  )
}

export default SignUp