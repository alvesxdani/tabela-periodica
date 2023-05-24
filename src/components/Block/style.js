import styled from 'styled-components';

const StyledComponent = styled.div`
  background-color: ${(props) => props.color};
  color: #fff;
  width: 200px;
  height: 200px;
`;

export default StyledComponent;