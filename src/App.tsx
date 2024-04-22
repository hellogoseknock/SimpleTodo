// import './App.css'
import { useState } from 'react'
import { Button } from './components/ui/button'

function App() {

  const [inputValue, setInputValue] = useState<string>('')

  const [todoList, setTodoList] = useState<string[]>([])
  const addItem = () => {
    console.log(inputValue)
    setTodoList([...todoList, inputValue])
  }

  return (
    <>
      <div className='flex py-5 justify-center gap-2'>
        <input type="text" name="남길글" placeholder="남길 글" onChange= {e => setInputValue(e.target.value)} className='border border-stone-800 rounded-md' />
        <Button onClick={addItem}>hello from macbook</Button>

      </div>
    </>
  )
}

export default App
