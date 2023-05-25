import { useDispatch } from 'react-redux';
import { deleteTodo, completeTask } from '../../todoSlice';

import './taskTodo.scss';

import layer from '../../../../assets/layer.png';
import box from '../../../../assets/box.png';
import checked from '../../../../assets/check.png';


function TaskTodo({ task, id, isTaskDone }) {

    const dispatch = useDispatch();
    const checkbox = isTaskDone ? checked : layer;

    const completedTaskStyle = isTaskDone ? { textDecoration: 'line-through', color: 'grey' } : null;

    return (
        <div className="todo">
            <div className='todo-wrapper'>
                <img
                    className='todo-layer'
                    src={checkbox}
                    alt="checkbox"
                    onClick={() => dispatch(completeTask(id))} />
                <div style={completedTaskStyle} className='todo-text'>{task}</div>
            </div>
            <img className='todo-box' onClick={() => dispatch(deleteTodo(id))} src={box} alt="trash box" />
        </div>
    );
}

export default TaskTodo;