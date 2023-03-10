import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const StyledAccordion = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  flex-direction: column;

  margin: 1rem auto;

  .outer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 1rem;
    border-radius: 1rem;

    background-color: #e0ecf4;

    cursor: pointer;

    &.true {
      border-radius: 1rem 1rem 0 0;

      background-color: #c0dcf4;
    }

    .icon {
      align-self: center;
    }
  }

  .inner {
    transition: 250ms;
    overflow: hidden;

    li {
      margin: 0.5rem 0;
    }

    &.true {
      padding: 1rem;
      border-radius: 0 0 1rem 1rem;

      background-color: #e0ecf4;
    }
  }
`;

const Accordion = (props) => {
  const [open, setOpen] = useState(true);

  return (
    <StyledAccordion className={"icon " + open} open={open}>
      <div className={"outer " + open}>
        <h3>{props.header}</h3>
      </div>
      <div className={"inner " + open}>{props.children}</div>
    </StyledAccordion>
  );
};

export default Accordion;
