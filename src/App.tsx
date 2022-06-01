// Leer notas debajo del código para más info
import { useEffect, useState } from 'react'
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Sub } from './types'

function App() {

  // Para no poner directamente useState<Array<Sub>>([]) o useState<Sub[]>([])
  interface AppState {
    subs: Array<Sub>
    newSubsNumber: number
  }

  const INITIAL_STATE = [
    {
      nick: 'rutica',
      subMonths: 3,
      avatar: 'https://i.pravatar.cc/150?u=rutica',
      description: 'rutica es un buen sub'
    },
    {
      nick: 'sergio_serrano',
      subMonths: 7,
      avatar: 'https://i.pravatar.cc/150?u=sergio_serrano'
    }
  ]

  // el estado será un array de varios 'Sub'
  // también se podria escribir: useState<Sub[]>([]) o useState<Array<Sub>>([])
  const [subs, setSubs] = useState<AppState['subs']>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  },[])

  return (
    <div className="App">
      <h1>Diloes subs</h1>
      <List subs={subs} />
      <Form />
    </div>
  )
}

export default App;

/**
 * NOTAS:
 * - Muy importante hacer hover cuando estamos escribiendo typescript porque nos da muchas pistas 
 * sobre con qué tipo estamos trabajando en cada sitio. 
 * - Observar también que nos ofrece los métodos o propiedades de un objeto o función cuando 
 * vamos escribiendo. Esto es cosa de typescript, no de VScode. 
 * - Nos detecta que la description es opcional y nos da error si no ponemos la '?'. Esto también
 * es cosa de TS.
 * - Una interfaz es como el contrato que tiene que tener un objeto o una clase. Un contrato no 
 * es más que unas condiciones preestablecidas que tiene que cumplir lo que se le aplique ese
 * contrato. 
 * - Cuando TS nos lance un error, es recomendable leerlo de abajo a arriba. 
 * - Los estados se pueden hacer con interfaces o poniendo directamente el tipo en useState<aqui el tipo>
 * pero es recomendable usar interfaz por si se pa haciendo más compleja la app.
 * - Los archivos .tsx son lo que tienen jsx - componentes de react dentro y .ts typescript sin 
 * nada de react dentro. 
 */