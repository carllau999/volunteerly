import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

class OppCard extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <Card className="opp-card" onClick={this.props.onClick}>
                <CardContent className="opp-card-content">
                    <div className="date">
                        <div className="month">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][(new Date(this.props.date).getMonth())]}</div>
                        <div className="day"> {new Date(this.props.date).getDay() + 1}</div>
                    </div>
                    <div className="info">
                        <h3 className>{this.props.title}</h3>
                        <p className>{this.props.desc}</p>
                    </div>
                </CardContent>
            </Card>
        );
  
    }
  }

export default OppCard;

