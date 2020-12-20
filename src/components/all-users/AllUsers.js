import React, {Component} from 'react';
import UserService from "../../service/UserService";
import User from "../user/User";

class AllUsers extends Component {

    userService = new UserService();

    state = {users: []};

    async componentDidMount() {
        let users = await this.userService.users();
        this.setState({users});
    }

    render() {
        let {users} = this.state;
        return (
            <div>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllUsers;