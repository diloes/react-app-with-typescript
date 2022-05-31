interface Props {
  subs: Array<{
    nick: string
    avatar: string
    subMonths: number
    description?: string
  }>
}

const List = ({ subs }: Props) => {
  return (
    <ul>
      {
        subs.map( sub => {
          return (
            <li key={sub.nick}>
              <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
              <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
              <p>{sub.description?.substring(0, 100)}</p>
            </li>
          )
        })
      }
    </ul>
  )
}

export default List

/**
 * NOTAS:
 * - const List: React.FC<Props> = ({ subs }) => {} -> Aquí le decimos que esto es un
 * componente List de tipo React Function Component que recibe props del tipo Props.
 * Pero esto tiene varios errores, el más llamativo que nos estaría aceptando children, cuando no debería.
 * No es recomendable usarlo.
 * Si necesitasemos aceptar children lo indicariamos en la interface como otro tipo más: children: JSX.Element, 
 * o children: string o children: React.ReactNode o children: (name: string) => React.ReactNode
 */