import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Menu from './MenuLayout'
import AddTask from './AddTask'
import TasksList from './TasksList'


class App extends Component {
    render() {
        return(
            <div>
                <Router>
                    <div>
                        <Menu />
                        <Redirect to='/tasks'/>
                        <Route path='/tasks' component={TasksList} />
                        <Route exact path={'/add'} component={AddTask} />
                        {/*placeholder for the component*/}
                        <Route path='/statistics' render={() => (
                            <div>
                                <h1 style = {{textAlign: 'center'}}>
                                    Statistics
                                </h1>
                            </div>
                        )}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App