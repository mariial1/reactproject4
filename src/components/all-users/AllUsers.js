import React, {Component} from 'react';
import UserService from "../../service/UserService";
import User from "../user/User";
import './AllUsers-css.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";
import FullUser from "../full-user/FullUser";

class AllUsers extends Component {

    userService = new UserService();

    state = {users: []};

    async componentDidMount() {
        let users = await this.userService.users();
        this.setState({users});
    }

    render() {
        let {users} = this.state;
        let {match: {url}} = this.props;

        return (
            <div>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
                <div className={'all-users'}></div>
                <Switch>
                    <Route path={`${url}/:id`} render={() => {return <FullUser/>}}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter (AllUsers);