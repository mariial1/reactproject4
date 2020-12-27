import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Comment extends Component {
    render() {
        let {item, match: {url}} = this.props;
        // console.log(this.props);
        return (
            <div>
                {item.id} - {item.body} - <Link to={url + '/' + item.id}>one comment</Link>
            </div>
        );
    }
}

export default withRouter (Comment)