import React, { Component } from 'react'
import Masonry from 'react-masonry-component';
import Task from './Task'
import tasks from '../tasks.json'

const masonryOptions = {
    columnWidth: 250,
    gutter: 30,
    isFitWidth: true,
    horizontalOrder: true
};

class TasksList extends Component {
  state = {
    deleteTask: null,
  }

  render () {
      return (
          <Masonry style = {{margin: '0 auto'}} options = {masonryOptions} >
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
          </Masonry>
      )
  }
    handleDeleteClick = taskIndex => this.setState({
        deleteTask: this.state.deleteTask === taskIndex ? null : taskIndex
    })
}

export default TasksList