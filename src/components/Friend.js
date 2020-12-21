import React from "react";
import styled, { keyframes } from "styled-components";
const Kf = keyframes`
100% {
  opacity: 1;
}
`;
const StyledFriend = styled.div`
  opacity: 0;
  animation: ${Kf} 0.5s ease-in-out forwards;
  color: ${(pr) => {
    return pr.danger ? pr.theme.dangerColor : pr.theme.primaryColor;
  }};
  font-weight: bold;
  width: 60%;
  display: flex;
  justify-content: space-between;
  &:hover {
    color: ${(pr) => pr.theme.secondaryColor};
    background-color: cyan;
    transition: all 0.5s ease-in-out;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
  button {
    color: ${(pr) => pr.theme.tertiaryColor};
    &:hover {
      transform: scale(2);
      transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
  }
  transition: all 0.5s ease-in-out;
`;

export default function Friend({ info, action }) {
  return (
    <StyledFriend danger={info.name === "Cora"}>
      {info.name}
      <button onClick={() => action(info.id)}>See details</button>
    </StyledFriend>
  );
}
