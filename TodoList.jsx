import React, {Component} from 'react';

class TodoList extends Component{
    state = {
        tasks: [
            {id: 1, name: 'Mengerjakan Post Test', completed: false},
            {id: 2, name: 'Mengerjakan Pre Test', completed: true},
            {id: 3, name: 'Menghadiri Bootcamp PZ', completed: false}
        ]
    };

    handleTaskClick = (id) => {
        const updateTasks = this.state.tasks.map(task => {
            if (task.id === id) {
            return {...task, completed: !task.completed};
            }
            return task;
            });
            this.setState({tasks: updateTasks});
        };
    render() {
        const tasks = this.state.tasks.map(task => (
            <li key={task.id} onClick={() => this.handleTaskClick(task.id)}>{task.name} - {task.completed ? 'Selesai' : 'Belum Selesai'}
            </li>
        ));
        return (
            <div>
                <ul>
                    {tasks}
                </ul>
            </div>
        );
    }
}

export default TodoList;