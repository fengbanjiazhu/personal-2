import { Tooltip } from "antd";
import React from "react";
import styled from "styled-components";

const StyledB = styled.b`
  border: 1px solid white;
  border-radius: 5px;
  padding: 1px;

  &:hover {
    transform: scale(1.3);
  }
`;

function TooltipBox({ text, tip }) {
  return (
    <>
      <Tooltip title={tip}>
        <StyledB style={{}} className="purple">
          {text}
        </StyledB>
      </Tooltip>{" "}
    </>
  );
}

export default TooltipBox;
