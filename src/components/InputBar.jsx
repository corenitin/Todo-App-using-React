
export default function InputBar({todo, setTodo, handleKeyDown}) {
    return (
        <div className="flex items-center p-4 bg-white rounded-sm mb-7 dark:bg-gray-800 shadow-xl/10">
            <label htmlFor="todo-input" className="checkbox"></label>
            <input
                className="todo-input"
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                onKeyDown={handleKeyDown}
                name="todo-input"
                id="todo-input"
                placeholder="Create a new todo..."
            />
        </div>
    )
}