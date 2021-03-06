import React from 'react';
import { Grid, Header, Icon, Image, Dropdown } from 'semantic-ui-react';
import { connect } from "react-redux";
import firebase from '../base/firebase';
import { setUser } from '../store/actioncreator'
import "./style.css";

const UserInfo = (props) => {
    const signOut = () => {
        firebase.auth()
            .signOut()
            .then(() => console.log("user signed out"));
    }

    const getDropDownOptions = () => {
        return [
            {
                key: "user",
                text: <span>Signed in as <strong>{props.user.displayName}</strong></span>,
                disabled: true
            },
            {
                key: "signout",
                text: <Icon name="sign-out"><span onClick={signOut} >  Sign Out</span></Icon>
            }
        ]
    }

    if (props.user) {
        return (<Grid>
            <Grid.Column>
                <Grid.Row className="userinfo_grid_row">
                    <Header inverted as="h2">
                        <Icon name="slack" />
                        <Header.Content>Slack</Header.Content>
                    </Header>
                    <Header className="userinfo_displayname" inverted as="h4">
                        <Dropdown
                            trigger={
                                <span>
                                    <Image  src={props.user.photoURL} avatar></Image>
                                    {props.user.displayName}
                                </span>
                            }
                            options={getDropDownOptions()}
                        >
                        </Dropdown>
                    </Header>
                </Grid.Row>
            </Grid.Column>
        </Grid>)
    }
    return null;
}

const mapStateToProps = (state) => {
    return {
        user: state.user.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      setUser: (user) => { dispatch(setUser(user.photoURL)) }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(UserInfo);