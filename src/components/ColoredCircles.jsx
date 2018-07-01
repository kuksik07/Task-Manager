import React, {Component} from 'react'
import { Button, Icon } from 'semantic-ui-react'

class ColoredCircles extends Component {
    render() {
        const {color, isChecked, onCircleClick} = this.props
        return(
            <Button circular icon color={color} onClick = {onCircleClick} size='mini' style={{ marginRight: '5px' }}>
                <Icon name={isChecked ? 'check': ''} />
            </Button>
        )
    }
}

export default ColoredCircles