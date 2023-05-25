import './header.scss';

import rocket from '../../assets/rocket.png';
import todo from '../../assets/todo.png';

import TodoAddForm from './todo-add-form/TodoAddForm';

function Header() {

    return (
        <header className='header'>
            <div className='header-logo'>
                <img className='header-logo_rocket' src={rocket} alt="rocket todo logo" />
                <img className='header-logo_todo' src={todo} alt="todo logo" />
                <a
                    className='header-github'
                    href="https://github.com/Andsailor/react-redux-todo-list">
                    <img
                        src="https://static-00.iconduck.com/assets.00/github-emoji-2048x2021-w2ge0ghn.png"
                        alt="github link img" />
                </a>
            </div>
            <div className='header-form'>
                <TodoAddForm />
            </div>
        </header>
    );
}

export default Header;