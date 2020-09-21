import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import arrowFilled from '../../common/img/icons/arrow_filled.svg';
import almostCircleIcon from '../../common/img/icons/almost_circle.svg';

const VideoImgOverlay = styled.a`
  height: 326px;
  display: block;
  overflow: hidden;
  margin: 0;
  position: relative;
  margin-bottom: 46px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    &::before {
      background-color: rgba(0, 0, 0, 0.22);
    }
  }
  &::before {
    transition: all 0.3s;
    border-radius: 5px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.42);
    z-index: 2;
    width: 100%;
    height: 326px;
    content: '';
  }
  &::after {
    background-image: url(${almostCircleIcon}), url(${arrowFilled});
    height: 73px;
    width: 73px;
    top: 0;
    position: absolute;
    content: '';
    z-index: 3;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    left: 0px;
    height: 326px;
  }
`;

const ImgModifed = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoUnderline = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const AddButton = styled.button`
  cursor: pointer;
  content: '+';
  border: none;
  padding: 0;
  margin: 0;
  font-size: 32px;
  background: none;
`;

const VideoItem = (props) => {
  const {
    id, name, isPopular, action,
  } = props;
  return (
    <>
      <VideoImgOverlay role="button" onClick={action}>
        <ImgModifed
          src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt="wait for load"
        />
      </VideoImgOverlay>
      <VideoUnderline>
        {name}
        {isPopular ? <AddButton onClick={action} /> : null}
      </VideoUnderline>
    </>
  );
};

VideoItem.defaultProps = {
  id: '',
  name: '',
  isPopular: false,
  /* eslint-disable @typescript-eslint/no-empty-function*/
  action: () => {},
};

VideoItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  isPopular: PropTypes.bool,
  action: PropTypes.func,
};

export default VideoItem;
