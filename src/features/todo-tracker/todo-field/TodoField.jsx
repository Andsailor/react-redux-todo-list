import { useSelector } from "react-redux";
import { Transition, TransitionGroup } from "react-transition-group";

import './todoField.scss';

import Skeleton from "./skeleton/Skeleton";
import TaskTodo from "./task-todo/TaskTodo";

const duration = 200;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

function TodoField() {

    const todos = useSelector(state => state.tasks)

    const content = todos.length > 0 ?
        <TransitionGroup>
            {todos.map(item => {
                return (
                    <Transition appear key={item.id} in={true} timeout={duration}>
                        {state => (
                            <div style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                                <TaskTodo
                                    isTaskDone={item.isTaskDone}
                                    id={item.id}
                                    key={item.id}
                                    task={item.task} />
                            </div>
                        )}
                    </Transition>
                )
            })}
        </TransitionGroup>
        : <Skeleton />

    return (
        <div className="field">
            {content}
        </div>
    );
}

export default TodoField;

