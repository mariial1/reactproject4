import React, {Component} from 'react';
import './App.css';
import {
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import AllUsers from "./components/all-users/AllUsers";
import AllPosts from "./components/all-posts/AllPosts";
import AllComments from "./components/all-comments/AllComments";


class App extends Component {
    render() {
        return (
                <div>
                    <ul>
                        <li>
                            <NavLink to={'/users'}>users</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/posts'}>posts</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/comments'}>comments</NavLink>
                        </li>

                    </ul>

                    <div className={'app-route'}>

                        <Switch>
                            <Route path={'/users'} component={AllUsers}/>
                            <Route path={'/posts'} component={AllPosts}/>
                            <Route path={'/comments'} component={AllComments}/>
                        </Switch>

                    </div>

                </div>
        );
    }
}

export default App;
