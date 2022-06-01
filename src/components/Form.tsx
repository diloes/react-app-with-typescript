import { useState } from "react"

const Form = () => {

  const [inputValues, setInputValues] = useState({
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
  })

  const handleSubmit = () => {}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValues.nick} 
        type='text' name='nick' placeholder='nick' />
        <input onChange={handleChange} value={inputValues.subMonths} 
        type='text' name='subMonths' placeholder='subMonths' />
        <input onChange={handleChange} value={inputValues.avatar} 
        type='text' name='avatar' placeholder='avatar' />
        <textarea onChange={handleChange} value={inputValues.description} 
        name='description' placeholder='description' />
        <button>Guardar nuevo sub!</button>
      </form>
    </div>
  )
}

export default Form

/**
 * NOTAS:
 * - (e: React.ChangeEvent<HTMLInputElement>) -> esto lo hemos averiguado poniendo directanmente 
 * en el onChange del input para darle contexto y que TS renociese el tipo por sí solo para después
 * copiarlo en nuestra función. En la función por si sóla no lo reconoce porque no sabe dónde
 * la vamos a llamar. 
 */