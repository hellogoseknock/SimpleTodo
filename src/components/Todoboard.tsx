import TodoItem from "./TodoItem"
const Todoboard = (props: any) => {
    // console.log(props.todoList)

    return (

        <div className="flex flex-col justify-center">
            <h1 className="text-5xl">할 일 목록</h1>
            <div>
                {props.todoList.map((item: string) =>
                    <TodoItem key={item} item={item} />
                )}
            </div>


        </div>
    )
}

export default Todoboard