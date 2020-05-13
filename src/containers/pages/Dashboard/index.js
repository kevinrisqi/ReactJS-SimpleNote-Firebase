import React, {Component} from 'react';
import './Dashboard.scss';
import {addDataToAPI, getDataFromAPI} from '../../../config/redux/action';
import { connect } from 'react-redux';

class Dashboard extends Component {

    state = {
        title: '',
        content: '',
        date: ''
    }

    componentDidMount() {
        const {getNotes} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'))

        getNotes(userData.uid)
    }

    handleSaveNotes = () => {
        const {title,content} = this.state;
        const {saveNotes} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'))

        const data = {
            title: title,
            content: content,
            date: new Date().getTime(),
            userId: userData.uid
        }
        console.log(data)
        saveNotes(data)
    }

    onInputChange = (e, type) => {
        this.setState ({
            [type] : e.target.value
        })
    }

    render() {
        const {title,content,date} = this.state;
        const {notes} = this.props;
        console.log('notes: ', notes)
        return(
            <div className="container">
                <div className="input-form">
                    <input className="input-title" placeholder="title" value={title} onChange={(e) => this.onInputChange(e, 'title')}/>
                    <textarea className="input-content" placeholder="content" value={content} onChange={(e) => this.onInputChange(e, 'content')}>

                    </textarea>
                    <button className="save-btn" onClick={this.handleSaveNotes}>Simpan</button>
                </div>
                <hr/>
                <div className="card-content">
                    <p className="title">Title</p>
                    <p className="date">12 Mei 2020</p>
                    <p className="content">Content Notes</p>
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    userData: state.user,
    notes: state.notes
})

const reduxDispatch = (dispatch) => ({
    saveNotes: (data) => dispatch(addDataToAPI(data)),
    getNotes: (data) => dispatch(getDataFromAPI(data))
})

export default connect(reduxState, reduxDispatch)(Dashboard);