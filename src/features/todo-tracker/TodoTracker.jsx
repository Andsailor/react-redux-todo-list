import './todoTracker.scss';

import TodoField from './todo-field/TodoField';
import TodoStats from './todo-stats/TodoStats';

function TodoTracker() {
    return (
        <div className="tracker">
            <TodoStats />
            <div className='tracker-content'>
                <TodoField />
            </div>
        </div>
    );
}

export default TodoTracker;