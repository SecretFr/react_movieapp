import React from "react";
import "../css/Detail.css"

class Detail extends React.Component{
    componentDidMount() {
        const {location, history} = this.props;
        console.log(this.props)
        if(location.state === undefined){
            history.push("/");
        }
    }

    render() {
        const {location} = this.props;
        if(location.state){
            return(
                <div className="detail_container">
                    <h1>{location.state.title}</h1>
                </div>
            )
        }
        else{
            return null;
        }
    }


}

export default Detail;