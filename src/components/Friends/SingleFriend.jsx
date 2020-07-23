import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd'
import styled from 'styled-components'
import DeleteIcon from './../../img/icons/delete.svg';
import MessageIcon from './../../img/icons/message.svg';

const FriendAvatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const FriendAvatarWrapper = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 37px;
`

const SingleFriendWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`

const SingleFriend = (props) => {
    const {
        firstname, lastname, profesion, avatarurl
    } = props;
    return(
        <SingleFriendWrapper>
        <FriendAvatarWrapper><FriendAvatar src={avatarurl} alt="name" /></FriendAvatarWrapper>
        <div>
    <p>{firstname} {lastname}</p>
    <p>{profesion}</p>
            <Button>chat</Button>
            <Button>delete</Button>
        </div>
    </SingleFriendWrapper>
    )
}

SingleFriend.defaultProps = {
    firstname: '', lastname: '', profesion: '', avatarurl: '',
}

SingleFriend.propTypes = {
    firstname: PropTypes.string, lastname: PropTypes.string, profesion: PropTypes.string, avatarurl: PropTypes.string,
}

export default SingleFriend