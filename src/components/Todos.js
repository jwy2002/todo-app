import React, { useState } from 'react';

const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
    return (
        <li
            style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
            onClick={() => onToggle(todo.id)}
            >
            {todo.text}
        </li>
    );
});

const TodoList = React.memo(function TodoList({ todos, onToggle }) {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    );
});

function Todos({ todos, onCreate, onToggle }) {
    // 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해야 하는 것은 아닙니다.
    const [text, setText] = useState('');
    const onChange = (e) => setText(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        onCreate(text);
        setText('');
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={text}
                    placeholder="할 일을 입력하세요."
                    onChange={onChange}
                    />
            </form>
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    );
}

export default Todos;