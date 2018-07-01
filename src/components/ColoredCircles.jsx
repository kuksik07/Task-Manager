import React, {Component} from 'react'
import { Button, Icon } from 'semantic-ui-react'

const styles = {
    mr_5: {
        'marginRight': '5px',
    },
}

class ColoredCircles extends Component {
    render() {
        const {color, isChecked, onCircleClick} = this.props
        return(
            <Button circular icon color={color} onClick = {onCircleClick} size='mini' style={styles.mr_5}>
                <Icon name={isChecked ? 'check': ''} />
            </Button>
        )
    }
}

export default ColoredCircles