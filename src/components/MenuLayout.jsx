import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddTask from "./AddTask";

class MenuLayout extends Component {
    state = { activeItem: 'tasks' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render () {
        const { activeItem } = this.state

        return (
            <div>
                <Menu style = {{marginBottom: '50px', borderRadius: '0', height: '50px'}}
                      color = {'black'}
                      inverted
                      widths={3}
                >
                    <Menu.Item
                        as={Link} to={'/tasks'}
                        name='tasks'
                        active={activeItem === 'tasks'}
                        onClick={this.handleItemClick}
                    >
                        <Icon name = 'sticky note outline' />
                        Tasks
                    </Menu.Item>
                    <Menu.Item
                        as={Link} to={'/add'}
                        name='add new task'
                        active={activeItem === 'add new task'}
                        onClick={this.handleItemClick}
                    >
                        <Icon name = 'edit outline' />
                        Add new task
                    </Menu.Item>
                    <Menu.Item
                        as={Link} to={'/statistics'}
                        name='statistics'
                        active={activeItem === 'statistics'}
                        onClick={this.handleItemClick}
                    >
                        <Icon name = 'chart bar outline' />
                        Statistics
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default MenuLayout