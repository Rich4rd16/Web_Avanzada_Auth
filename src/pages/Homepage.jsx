import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Homepage = ({token}) => {
  let navigate = useNavigate()
  
  function handleLogout(){
    sessionStorage.removeItem('token')
    navigate('/')
  }
  

  return (
    
    <div>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Bienvenido
              <strong className="block font-extrabold text-rose-700"> de vuelta!!</strong>
              {token.user.user_metadata.full_name}
            </h1>
            <p className="mt-4 sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
              numquam ea!
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button onClick={handleLogout} className="block mx-auto w-full sm:w-auto rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500" >
                Salir de sesión
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Homepage