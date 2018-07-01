import React, {Component} from 'react'
import AddTask from './AddTask'
import Menu from './MenuLayout'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


class App extends Component {
    render() {
        return(
            <div>
                <Router>
                    <div>
                        <Menu />
                        <Redirect to='/tasks'/>
                        {/*placeholder for the component*/}
                        <Route path='/tasks' render={() => (
                            <div>
                                <h1 style = {{textAlign: 'center'}}>
                                    Tasks
                                </h1>
                            </div>
                        )}/>
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