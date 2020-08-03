import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// const GridContainer = styled.div`
//   display: grid;
//   /* grid-template-columns: 1fr 1fr; */
//   grid-template-columns: ${(props) => `${props.template}`};

//   grid-gap:  ${(props) => `${props.gap}`};
// `;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  grid-gap: ${(props) => `${props.gap}`};
`;

const AllPhotosGrid = ({ children, ...props }) => {
  const { template, gap } = props;
  return (
    <GridContainer template={template} gap={gap}>
      {children}
    </GridContainer>
  );
};

export default AllPhotosGrid;

AllPhotosGrid.defaultProps = {
  template: '',
  gap: '',
};

AllPhotosGrid.propTypes = {
  template: PropTypes.string,
  gap: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array.isRequired,
};
