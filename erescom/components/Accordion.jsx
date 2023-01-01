import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const StyledAccordion = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  flex-direction: column;

  margin: 1rem 0;

  .outer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    cursor: pointer;

    border-bottom: solid lightgray 1px;

    .icon {
      align-self: center;
    }
  }

  .inner {
    transition: 250ms;
    overflow: hidden;
    max-height: ${(props) => (!props.open ? "0px" : "50vh")};

    li {
      margin: 0.5rem 0;
    }
  }
`;

const Accordion = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledAccordion className="icon" open={open}>
      <div className="outer" onClick={() => setOpen(!open)}>
        <h3>{props.header}</h3>
        {!open ? (
          <FontAwesomeIcon icon={faPlus} />
        ) : (
          <FontAwesomeIcon icon={faMinus} />
        )}
      </div>
      <div className="inner">
        <p>{props.text}</p>
      </div>
    </StyledAccordion>
  );
};

export default Accordion;
