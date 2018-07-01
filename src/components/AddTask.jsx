import React, {Component} from 'react'
import { Card, TextArea, Form, Button, Icon } from 'semantic-ui-react'
import ColoredCircles from './ColoredCircles'

const colors = [
    'red',
    'yellow',
    'green',
    'blue',
    'purple',
    'black'
]

const styles = {
    mb_15: {
        'marginBottom': '15px',
    },
    mt_15: {
        'marginTop': '15px',
    },
}

class AddTask extends Component {
    state = {
        checkedColor: null,
    }

    render() {
        return(
            <div>
                <Form>
                    <Card centered>
                        <Card.Content>
                            <Card.Header color='green'>New task</Card.Header>
                            <Card.Description>
                                <input style = {styles.mb_15}  name = "title" placeholder = 'Title' />
                                <TextArea style = {{...styles.mb_15, maxHeight: 100, minHeight: 100 }}
                                          autoHeight name = "description" placeholder = 'Description' />
                                <div>
                                    {colors.map(color => (
                                        <ColoredCircles
                                            color = {color}
                                            isChecked = {this.state.checkedColor === color}
                                            onCircleClick = {this.handleClick.bind(this, color)}
                                            key = {color}
                                        />
                                    ))}
                                </div>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content>
                            <Button positive onClick={this.handleSubmit}>
                                <Icon name = 'sticky note outline' />
                                Add task
                            </Button>
                        </Card.Content>
                    </Card>
                </Form>
            </div>
        )
    }

    handleClick = checkedColor => this.setState({
        checkedColor: this.state.checkedColor === checkedColor ? null : checkedColor
    })

    handleSubmit = () => {
        console.log(this.state.checkedColor)
    }
}

export default AddTask