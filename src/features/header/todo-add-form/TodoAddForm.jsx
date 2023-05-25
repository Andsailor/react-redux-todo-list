import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../todo-tracker/todoSlice';
import { v4 as uuidv4 } from 'uuid';

import './todoAddForm.scss';

function TodoAddForm() {

    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const addTaskToTracker = (e, value) => {
        e.preventDefault();
        const id = uuidv4();
        const taskTodo = {
            id,
            task: value,
            isTaskDone: false
        };

        dispatch(addTodo(taskTodo));
        setTask('');
    }

    return (
        <form onSubmit={(e) => addTaskToTracker(e, task)} className='form'>
            <input
                className='form-input'
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder='Type task to track it'
                type="text" />
            <button
                disabled={task.length === 0}
                className='form-button'
                type='submit'>
                Track
            </button>
        </form>
    );
}

export default TodoAddForm;