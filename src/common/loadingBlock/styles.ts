import styled from 'styled-components';
import loading from '../../img/LoadingBlock.svg';

export const StyledWrapped = styled.div`
    margin-top: 250px;
`;

export const StyledLoading = styled.div`
    background-image: url(${loading});
    background-size: contain;
    width: 150px;
    height: 150px;
    margin: 0 auto;
`;
