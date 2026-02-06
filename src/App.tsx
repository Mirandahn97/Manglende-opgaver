import { Header } from './components/Header/Header'
import { Button } from './components/Button/Button'

function App() {


  return (
    <>
      <Header headerText='Props er cool!!'></Header>
      <Button
        text='Knap 1'
        size='small'
        theme='light'
        action={() => alert('Du kar klikket på den 1. knap')}
      />

      <Button
        text='Knap 2'
        size='medium'
        theme='dark'
        action={() => alert('Nu har du klikket på den 2.  knap')}
      />

      <Button
        text='Knap 3'
        size='large'
        theme='light'
        action={() => alert('BOOOOOM det var så den 3. knap')} />
    </>
  )
}

export default App
