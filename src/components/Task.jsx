import React from 'react'
import { Card, Icon, Popup, Button } from 'semantic-ui-react'

const Task = ({ title, description, color }) =>
        <Card color = {color} style = {{width: '250px'}}>
            <Card.Content extra style = {{borderTop: 'none'}}>
                <Popup trigger={<Icon link name='close' style = {{float: 'right'}} />} on='click' position='top right'>
                    <Button.Group>
                        <Button positive>Done</Button>
                        <Button>Not done</Button>
                    </Button.Group>
                </Popup>
            </Card.Content>
            <Card.Content style = {{borderTop: 'none'}}>
                <Card.Header>{title}</Card.Header>
                <Card.Description>{description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='calendar outline' />
                01.07.2018
            </Card.Content>
        </Card>

export default Task