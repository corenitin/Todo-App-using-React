export default function Footer({
    todos,
    allTodos,
    activeTodos,
    completedTodos,
    clearTodos
}) {

    const activeCount = todos.filter(t => !t.completed).length;
    return (
        <>
            {/* MAIN FOOTER */}
            <div className="todo-footer">

                <span className="text-gray-400 dark:text-gray-600 text-[12px] md:text-sm">
                    {activeCount} items left
                </span>

                {/* DESKTOP FILTERS */}
                <div className="hidden md:flex gap-2">
                    <button className="footer-btn" onClick={allTodos}>All</button>
                    <button className="footer-btn" onClick={activeTodos}>Active</button>
                    <button className="footer-btn" onClick={completedTodos}>Completed</button>
                </div>

                <button className="footer-btn" onClick={clearTodos}>
                    Clear Completed
                </button>
            </div>

            {/* MOBILE FILTERS */}
            <div className="md:hidden flex justify-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-sm mt-4">
                <button className="footer-btn" onClick={allTodos}>All</button>
                <button className="footer-btn" onClick={activeTodos}>Active</button>
                <button className="footer-btn" onClick={completedTodos}>Completed</button>
            </div>
        </>
    );
}