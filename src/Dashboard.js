import React from 'react';
import './style.scss';
import {Button, ProgressBar, Form} from 'react-bootstrap';
import adBanner from './images/tco2o.png';
import avatar from './images/avatar.png';
import img1 from './images/right_pane_1.png';
import img2 from './images/right_pane_2.png';
import img3 from './images/right_pane_3.png';
import img4 from './images/right_pane_4.png';

import 'react-activity-feed/dist/index.es.css';
import {
    StreamApp,
    StatusUpdateForm,
    FlatFeed,
    NotificationDropdown,
    Activity,
    LikeButton,
    CommentField,
    CommentList
} from 'react-activity-feed';

const dateProp = (month) => {
    if (month === 0) {
        return "Jan"
    };
    if (month === 1) {
        return "Feb"
    };
    if (month === 2) {
        return "March"
    };
    if (month === 3) {
        return "Apr"
    };
    if (month === 4) {
        return "May"
    };
    if (month === 5) {
        return "Jun"
    };
    if (month === 6) {
        return "Jul"
    };
    if (month === 7) {
        return "Aug"
    };
    if (month === 8) {
        return "Sept"
    };
    if (month === 9) {
        return "Oct"
    };
    if (month === 10) {
        return "Nov"
    };
    if (month === 11) {
        return "Dec"
    };
}

class App extends React.Component {
    render() {
        return (
            <StreamApp
                apiKey="du8he7epvp94"
                appId="45206"
                token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiOGQ1MjFhY2QtZmMzMC00NzBlLWFhMjAtODViMzI2ZDQ3MTg0In0.ubFCGhADCzQ0uBBp-h-kUOESbzvapI8VbLx5J1gPe5s">
                <NotificationDropdown notify/>
                <StatusUpdateForm
                    feedGroup="timeline"
                    userId=""/>
                <FlatFeed
                    options={{
                    reactions: {
                        recent: true
                    }
                }}
                    notify
                    Activity={(props) => <Activity
                    {...props}
                    Footer={() => (
                    <div
                        style={{
                        padding: '8px 16px'
                    }}>
                        <LikeButton {...props}/>
                        <CommentField activity={props.activity} onAddReaction={props.onAddReaction}/>
                        <CommentList activityId={props.activity.id}/>
                    </div>
                )}/>}/>
            </StreamApp>
        );
    }
}

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'iaminfinite',
            fullName: 'Muhammad Arifin Siregar',
            profileCompletion: 30,
            profileViews: 0,
            followers: 0,
            following: 0,
            activeChallenge: 0,
            recommendedChallenge: 17,
            avbWithDraw: 2300,
            pending: 5500,
            totalEarned: 22000,
            articleDate: Date.now(),
            articleTitle: 'Acmme Blog Post a Study of Design Language-Part1: Introduction'
        }
        this.pickupDate = this
            .pickupDate
            .bind(this);
    }
    pickupDate = (date) => {
        var d = new Date(date);
        var n = d.getDate();
        var m = d.getMonth();
        var y = d.getFullYear();
        m = dateProp(m);
        return `${m} ${n}, ${y}`;
    }
    render() {

        return (
            <div className="container mt-3">
                <div className="row">
                    <div id="left_pane" className="col-md-3">
                        <div id="box-1" className="d-flex mb-3 flex-column bg-white round border">
                            <div id="profile" className="p-2 d-flex flex-column align-items-center">
                                <div className="p-2 flex-fill ln-0">
                                    <div id="profile-photo">
                                        <img id="avatar" alt="profile photos" src={avatar}/>
                                    </div>
                                </div>
                                <div className="p-2 flex-fill text-center font-weight-bold">
                                    <h4 id="userName">
                                        <strong>{this.state.username}</strong>
                                    </h4>
                                    <p id="fullName" className="text-secondary small font-weight-bold">{this.state.fullName}</p>
                                    <hr/>
                                </div>
                                <div className="p-2 flex-fill">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex ln-0 justify-content-center">
                                            <div className="p-2 mr-auto">
                                                <p className="ln-0">Profile Completion</p>
                                            </div>
                                            <div className="p-2">
                                                <p className="ln-0">{this.state.profileCompletion}%</p>
                                            </div>
                                        </div>
                                        <div className="p-2 ln-0">
                                            <ProgressBar
                                                className="round"
                                                variant="primary"
                                                size="sm"
                                                now={this.state.profileCompletion}/>
                                        </div>
                                        <div className="p-2 ">
                                            <div className="d-flex justify-content-center">
                                                <Button className="round" variant="outline-primary">
                                                    <h5>COMPLETE YOUR PROFILE</h5>
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="p-2">
                                            <hr/>
                                        </div>
                                    </div>
                                    <div id="followSquare" className="d-flex ln-0">
                                        <div className="p-2">
                                            <div className="d-flex  flex-column ln-0 align-items-center">
                                                <div className="p-2 font-weight-bold ">{this.state.profileViews}</div>
                                                <div className="p-2 text-secondary ">
                                                    <h5>PROFILE VIEWS</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2">
                                            <div className="d-flex flex-column align-items-center">
                                                <div className="p-2 font-weight-bold ">{this.state.followers}</div>
                                                <div className="p-2 text-secondary ">
                                                    <h5>FOLLOWERS</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 ">
                                            <div className="d-flex flex-column align-items-center">
                                                <div className="p-2 font-weight-bold">{this.state.following}</div>
                                                <div className="p-2 text-secondary">
                                                    <h5>FOLLOWING</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="newsfeedLabel" className="p-2">
                                        <h9 className="ln-0">
                                            <strong>newsfeed</strong>
                                        </h9>
                                    </div>
                                    <div id="activeChallenge" className="p-2">
                                        <div className="d-flex round bg-light">
                                            <div className="p-2 mr-auto text-secondary font-weight-bold">
                                                <p className="ln-0">My Active Challenge</p>
                                            </div>
                                            <div className="p-2 round bg-dark text-light">
                                                <p className="ln-0">{this.state.activeChallenge}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="p-2 mr-auto text-secondary font-weight-bold">
                                                <p className="ln-0">Recommended Challenge</p>
                                            </div>
                                            <div className="p-2 round bg-dark text-light">
                                                <p className="ln-0">{this.state.recommendedChallenge}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="box-2" className="d-flex mb-3 flex-column bg-white round border">
                            <div id="earning" className="p-2 d-flex mb-0 mt-0 flex-column">
                                <div className="d-flex">
                                    <div className="p-2 align-self-center mr-auto">
                                        <p>MY EARNINGS</p>
                                    </div>
                                    <div className="p-2 align-self-center">
                                        <Form>
                                            <Form.Check
                                                type="switch"
                                                variant="danger"
                                                id="custom-switch"
                                                inline
                                                label="show"/>
                                        </Form>
                                    </div>
                                </div>
                                <div id="withdraw" className="p-2 flex-fill round text-white">
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="p-2">
                                            <h4 className="mb-0">${this.state.avbWithDraw}</h4>
                                        </div>
                                        <div className="p-2">
                                            <p>AVAILABLE TO WITHDRAW</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column">
                                    <div className="d-flex">
                                        <div className="p-2 mr-auto">
                                            <h8>Pending</h8>
                                        </div>
                                        <div className="p-2">
                                            <h8>
                                                <strong>${this.state.pending}</strong>
                                            </h8>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="p-2 mr-auto">
                                            <h8>Total Earned</h8>
                                        </div>
                                        <div className="p-2">
                                            <h8>
                                                <strong>${this.state.totalEarned}</strong>
                                            </h8>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-3 justify-content-center">
                                        <Button className="round" variant="outline-primary">
                                            <h5>GO TO PACT</h5>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="box-3" className="d-flex mb-3 flex-column bg-white round border">
                            <div className="p-2 mt-3">
                                <p className="ln-0">RECOMMENDED ARTICLES</p>
                            </div>
                            <div id="articleList" className="p-2 d-flex">
                                <div className="p-2">
                                    <h3 className="ln-0">
                                        <i id="file" className="far fa-file-alt text-secondary"></i>
                                    </h3>
                                </div>
                                <div className="p-2">
                                    <div className="d-flex flex-column">
                                        <div className="p-2 text-secondary">
                                            <p className="ln-0">{this.pickupDate(this.state.articleDate)}</p>
                                        </div>
                                        <div className="p-2">
                                            <h4 className="small">{this.state.articleTitle}</h4>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div id="box-4" className="d-flex mb-3 flex-column bg-white round border">
                            <div className="p-2 mt-3">
                                <p>WHO TO FOLLOW</p>
                            </div>
                            <div className="p-2">

                            </div>
                        </div>
                    </div>
                    <div id="middle_pane" className="col-md-6 ">
                        <div className="d-flex flex-column">
                            <div className="p-2 mb-3 my-0 py-0">
                                <img id="ad" alt="ad" src={adBanner}/>
                            </div>
                            <div className="p-2 mb-3">
                                <h4 className="ln-0">
                                    <strong>NEWSFEED</strong>
                                </h4>
                            </div>
                            <div className="p-2">
                                <App/>
                            </div>
                        </div>
                    </div>
                    <div id="right_pane" className="col-md-3 ">
                        <div className="mb-3">
                            <img alt="one" src={img1}/>
                        </div>
                        <div className="mb-3">
                            <img alt="two" src={img2}/>
                        </div>
                        <div className="mb-3">
                            <img alt="three" src={img3}/>
                        </div>
                        <div className="mb-3">
                            <img alt="four" src={img4}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Dashboard;
