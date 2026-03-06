import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function SortableItem({ todoValue, index, toggleTodo, deleteTodo }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: todoValue.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="todo-list-block"
    >
      <div className="flex items-center" >
        <div
          onClick={() => toggleTodo(index)}
          className={`${todoValue.completed ? "gradient-checkbox" : "checkbox"}`}
        ></div>

        <p
          {...attributes}
          {...listeners}
          className={`${todoValue.completed 
            ? "todo-completed" 
            : "todo-not-completed"}`}
        >
          {todoValue.text}
        </p>
      </div>

      <img
        src="/images/icon-cross.svg"
        alt="cross icon"
        className="w-4 h-4 cursor-pointer"
        onClick={() => deleteTodo(todoValue.id)}
      />
    </div>
  );
}