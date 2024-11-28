import './App.css'
import Title from './components/title'
import Counter from './components/counter'

function App() {
  return (
    < >
      <div className='flex justify-center pt-5'>
        <div>
          <Title value={'Mis componentes'} />
        </div>
      </div>
      <div className='flex flex-wrap justify-center mx-10'>
        <Counter />
      </div>
    </>
  )
}

export default App
