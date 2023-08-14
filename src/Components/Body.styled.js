import styled from "styled-components";
import relax from "../img/relax.jpg";

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: ${(props) => `url(${props.image || relax})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export { Body };
