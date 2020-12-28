import React from 'react';
import {NavLink, withRouter} from "react-router-dom";

const User = ({item, match: {url}}) => {

    return (
        <div>
            {item.id} - {item.name} - <NavLink to={url + '/' + item.id}>details</NavLink>
        </div>
    );
}

export default withRouter(User)
