import React, {useCallback} from 'react';
import { MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from "react-icons/md";
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle, style}) => {

    const { id, text, checked } = todo;

    const onClick = useCallback(() => {
        onRemove(id);
    }, [onRemove, id]);

    const onClickCheck = useCallback(() => {
        onToggle(id);
    }, [onToggle, id]);

    return (
        <div className="TodoListItem-virtualized" style={style}>
            <div className="TodoListItem">
                <div className={cn('checkbox', { checked })} onClick={onClickCheck}>
                    { checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
                    <div className="text">{text}</div>
                </div>
                <div className="remove" onClick={onClick}>
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    );
};

//component의 props가 수정되지 않는 경우 리렌터링 하지 않음
export default React.memo(TodoListItem,
    (prevProps, nextProps)=>prevProps.todo === nextProps.todo);