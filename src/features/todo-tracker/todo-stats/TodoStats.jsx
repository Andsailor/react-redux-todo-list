import { useSelector } from 'react-redux';

import './todoStats.scss';

function TodoStats() {

    const allTasksCount = useSelector(state => state.tasks.length);
    const todos = useSelector(state => state.tasks);

    const completedTasks = todos.filter(item => item.isTaskDone === true);

    return (
        <div className="stats">
            <div className="stats-all">Tasks at all: <span>{allTasksCount}</span></div>
            <div className="stats-done">Tasks done: <span>{completedTasks.length} of {allTasksCount}</span></div>
        </div>
    );
}

export default TodoStats;