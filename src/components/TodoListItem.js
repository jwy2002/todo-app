import React, {useCallback} from 'react';
import { MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from "react-icons/md";
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle}) => {

    const { id, text, checked } = todo;

    const onClick = useCallback(() => {
        onRemove(id);
    }, [onRemove, id]);

    const onClickCheck = useCallback(() => {
        onToggle(id);
    }, [onToggle, id]);

    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', { checked })} onClick={onClickCheck}>
                { checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={onClick}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;