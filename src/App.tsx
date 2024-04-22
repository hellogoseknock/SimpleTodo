// import './App.css'
import { useState } from 'react'
import { Button } from './components/ui/button'
import Todoboard from './components/Todoboard'

function App() {

  const [inputValue, setInputValue] = useState<string>('')

  const [todoList, setTodoList] = useState<string[]>([])
  const addItem = () => {
    // console.log(inputValue)
    setTodoList([...todoList, inputValue])
  }

  return (
    <>

      <div className='flex justify-center py-3 gap-2'>
        <input type="text" name="남길글" placeholder="남길 글" onChange={e => setInputValue(e.target.value)} className='border border-stone-800 rounded-md' />
        <Button onClick={addItem}>add </Button>
      </div>

      <div className='flex py-5 justify-center gap-2'>
        <Todoboard todoList={todoList}/>
      </div>
    </>
  )
}

export default App
