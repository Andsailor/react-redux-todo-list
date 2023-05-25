import './app.scss';

import Header from '../header/Header';
import TodoTracker from '../todo-tracker/TodoTracker';

function App() {
    return (
        <div className="app">
            <Header />
            <TodoTracker />
        </div>
    );
}

export default App;