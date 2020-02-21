import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

class Nav extends Component {
    constructor(props){
        super(props)
    }

    render(){
        
        return (
           
            <div>
                 
                <button> <Link to='/'></Link>Home</button>
                <button> <Link to='/post/:postid'></Link>New Post</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {username, profilePic} = reduxState
}

export default connect(mapStateToProps)(Nav);