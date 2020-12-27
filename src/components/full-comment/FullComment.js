import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import CommentService from "../../service/CommentService";


class FullComment extends Component {

    state = {comment: null};
    commentService = new CommentService();

    async componentDidMount() {
        const {commentId} = this.props;
        const comment = await this.commentService.comment(commentId);
        this.setState({comment});
    }

    render() {
        const {comment} = this.state;
        return (
            <div>
                {comment && <div>{comment.id} - {comment.body}</div>}
            </div>
        );
    }
}

export default withRouter (FullComment);