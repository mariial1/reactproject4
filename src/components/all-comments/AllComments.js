import React, {Component} from 'react';
import CommentService from "../../service/CommentService";
import Comment from "../comment/Comment";
import {Route, Switch, withRouter} from "react-router-dom";
import './AllComments.css';
import FullComment from "../full-comment/FullComment";


class AllComments extends Component {
    commentService = new CommentService();

    state = {comments: []};

   async componentDidMount() {
        let comments = await this.commentService.comments();
        this.setState({comments});
    }

    render() {
        let {comments} = this.state;
        let {match: {url}} = this.props;

        return (
            <div>
                {
                    comments.map(value => <Comment item={value} key={value.id}/>)
                }
                <div className={'all-comments'}>
                    <Switch>
                        <Route path={url + '/:id'} exact={true} render={(props) => {
                            let {match: {params: {id}}} = props;
                            return <FullComment commentId={id} key={id}/>;
                        }}/>
                    </Switch>

                </div>
            </div>
        );
    }
}

export default withRouter (AllComments);