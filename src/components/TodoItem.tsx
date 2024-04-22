const TodoItem = (props: any) => {
  return (
    <div>
      <div className="text-2xl border border-lime-400 rounded-lg py-2 px-2 my-3">{ props.item}</div>
      
    </div>

  )
}

export default TodoItem