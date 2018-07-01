import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import Task from './Task'
import tasks from '../tasks.json'

class TasksList extends Component {
  state = {
    deleteTask: null,
  }

  render () {
      return (
          <Card.Group itemsPerRow={3} centered>
              {tasks.map((task, index) =>
                  <Task
                      title = {task.title}
                      description = {task.description}
                      color = {task.color}
                      isOpenPopup = {this.state.deleteTask === index}
                      onClickDelete = {this.handleDeleteClick.bind(this, index)}
                      key = {index}
                  />
              )}
          </Card.Group>
      )
  }
    handleDeleteClick = taskIndex => this.setState({
        deleteTask: this.state.deleteTask === taskIndex ? null : taskIndex
    })
}

export default TasksList