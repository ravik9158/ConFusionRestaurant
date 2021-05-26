import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);
    }

    renderDish(){
        return (
            <Card>
                <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name}/>
                <CardBody>
                    <CardTitle heading>{this.props.selectedDish.name}</CardTitle>
                    <CardText>{this.props.selectedDish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        
        if(comments != null){
            const displayComments = comments.map((comment) => {
            return (
                <ListGroupItem key={comment.id} className="border-0">
                    <p>{comment.comment}</p>
                    <div>
                        <p>-- {comment.author} , {comment.date}</p>
                    </div>
                </ListGroupItem>  
            )
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ListGroup>
                        {displayComments}
                    </ListGroup>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )        
        }
    }

    render() {
        if(this.props.selectedDish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish()}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            );
        }
    }
}
export default DishDetail;