import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'
import './Styling.css'

class CardWithButton extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
     
        return (
            <div className="container">
                <Card className="test">
                <CardHeader
                    title={this.props.event.title}
                    subheader={this.props.event.date}
                />
                <CardContent>
                    {this.props.event.desc}
                </CardContent>
                <Button onClick={this.props.buttonFunc} variant="contained" color="primary">
                    {this.props.buttonText}
                </Button>
                </Card>
            </div>
        );
  
    }
  }

export default CardWithButton;


