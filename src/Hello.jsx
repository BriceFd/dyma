export function Greeting({name, age}) {
  return <h2>Greeting { name } ! Vous avez {age} ans !</h2>

}



export default function Hello({children}) {
  
    return (
      <>
    <h1 style={{color: 'red'}}>Hello World !</h1>
    {children}
    </>
    )
    
  }

