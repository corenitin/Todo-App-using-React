import { DndContext } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import Footer from "./Footer";


export default function LisOfTodos({ todos, handleDragEnd, filteredTodos, toggleTodo, deleteTodo, allTodos, activeTodos, completedTodos, clearTodos }) {
    return (
        <div className={`${todos === null ? 'hidden' : 'container-of-todos'} `}>
            <DndContext onDragEnd={handleDragEnd}>
                <SortableContext
                    items={todos.map((t) => t.id)}
                    strategy={verticalListSortingStrategy}
                >
                    {filteredTodos.map((todoValue, index) => (
                        <SortableItem
                            key={todoValue.id}
                            todoValue={todoValue}
                            index={index}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                        />
                    ))}
                </SortableContext>
            </DndContext>

            {todos.length > 0 && <Footer todos={todos} allTodos={allTodos} activeTodos={activeTodos} completedTodos={completedTodos} clearTodos={clearTodos} />}
        </div>
    )
}