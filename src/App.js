import React, {useCallback, useReducer, useRef} from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function createBulkTodos() {
    const array = [];
    for( let i=1;i<=25000;i++ ) {
        array.push({id: i, text: `할일 ${i}`, checked: false});
    }
    return array;
}

function todoReducer(todos, action) {
    switch( action.type ) {
        case 'INSERT':
            return todos.concat(action.todo);

        case 'REMOVE':
            return todos.filter(todo => todo.id !== action.id);

        case 'TOGGLE':
            return todos.map(todo => todo.id === action.id ?
                {...todo, checked: !todo.checked}:todo);

        default:
            return todos;
    }
}

const App = () => {

    // const [todos, setTodos] = useState([
    //     { id: 1, text: '리엑트의 기초 알아보기', checked: true },
    //     { id: 2, text: '컴포넌트 스타일링해 보기', checked: true },
    //     { id: 3, text: '일정 관리 앱 만들어 보기', checked: false }
    // ]);
    // const [todos, setTodos] = useState(createBulkTodos);
    const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

    const nextId = useRef(25001);

    const onInsert = useCallback( (text) => {
        const todo = {
            id: nextId.current,
            text,
            checked: false
        };
        // setTodos(todos.concat(todo));
        // setTodos(prevTodos => prevTodos.concat(todo));
        dispatch({type: 'INSERT', todo});
        nextId.current += 1;
    }, []); //todos

    const onRemove = useCallback( (id) => {
        // setTodos(todos.filter((todo) => todo.id !== id));
        // setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
        dispatch({type: 'REMOVE', id});
    }, []); //todos

    const onToggle = useCallback((id) => {
        // setTodos(
        //     todos.map((todo) =>
        //         todo.id === id ? {...todo, checked: !todo.checked }
        //             : todo)
        // );
        // setTodos( prevTodos =>
        //     prevTodos.map((todo) =>
        //         todo.id === id ? {...todo, checked: !todo.checked }
        //             : todo)
        // );
        dispatch({type: 'TOGGLE', id});
    }, []); //todos

    return (
        <div>
            <TodoTemplate>
                <TodoInsert onInsert={onInsert} />
                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
            </TodoTemplate>
        </div>
    );
};

export default App;