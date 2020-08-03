import React from 'react';
import styled from 'styled-components';

const styles = {
  card: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    border: '1px solid black',
    transform: 'translate(-50%, -50%)',
    height: '370px',
    width: '800px',
    borderRadius: '15px',
  },
};

const Card = (props) => {
  console.log(props);
  return (
    <div style={{
      ...styles.card,
      backgroundColor: props.color,
      left: `${props.x}px`,
      top: `${props.y}px`,
      zIndex: props.z_index,
      transform: `translate(-50%, -50%) scale(${props.scale})`,
    }}
    />
  );
};

export default Card;
