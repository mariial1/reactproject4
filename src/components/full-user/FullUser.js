import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import UserService from "../../service/UserService";

class FullUser extends Component {

    state = {user: null};
    userService = new UserService();

    componentDidMount() {
        const {userId} = this.props;
        this.userService
            .user(userId)
            .then(user =>
                this.setState({user}))
    }

    render() {
        const {user} = this.state;
        return (
            <div>
                {user && <div>{user.id} - {user.name} - {user.email}</div>}
            </div>
        );
    }
}

export default withRouter (FullUser);
