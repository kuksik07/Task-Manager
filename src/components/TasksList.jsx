import React from 'react'
import { Card } from 'semantic-ui-react'
import Task from './Task'
import tasks from '../tasks.json'

const TasksList = () =>
        <Card.Group itemsPerRow={3} centered>
            {tasks.map(task =>
                <Task
                    title = {task.title}
                    description = {task.description}
                    color = {task.color}
                />
            )}
        </Card.Group>

export default TasksList