import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state = {
            posts: [],
            search: '',
            userPosts: true
        }
    }

    componentDidMount(){
        this.getAllPosts()
    }

    getAllPosts = (id) => {
        axios.get(`api/posts/${this.props.user.userId}`).then((res) => {
            this.setState({
                posts: res.data
            })
        }).catch(err => console.warn(err))
    }

    resetSearch = () => {
        this.setState({
            posts: [],
            search: '',
            userPosts: true
        })
    }

    render(){
        return (
            <div>
                <input/>
                <ul>
                    <div>My Posts:</div>
                    <input 
                    type="checkbox"/>
                </ul>
                <button onClick={() => this.getAllPosts()}>Search</button>
                <button onClick= {() =>this.handleCancel()}>Reset</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {userId} = reduxState
}

export default connect(mapStateToProps)(Dashboard);