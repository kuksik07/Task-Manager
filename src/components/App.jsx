import React, {Component} from 'react'
import AddTask from './AddTask'
import Menu from './MenuLayout'

class App extends Component {
    render() {
        return(
            <div>
                <Menu />
                <AddTask />
            </div>
        )
    }
}

export default App