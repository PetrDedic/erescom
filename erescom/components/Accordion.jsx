import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const StyledAccordion = styled.div`
  height: auto;
  width: calc(100% - 6rem);

  display: flex;
  flex-direction: column;

  margin: 1rem auto;

  .outer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 1rem;
    border-radius: 1rem;

    background-color: #1b95f316;

    cursor: pointer;

    &.true {
      border-radius: 1rem 1rem 0 0;

      background-color: #1b95f340;
    }

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

    &.true {
      padding: 1rem;
      border-radius: 0 0 1rem 1rem;

      background-color: #1b95f316;
    }
  }
`;

const Accordion = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledAccordion className={"icon " + open} open={open}>
      <div className={"outer " + open} onClick={() => setOpen(!open)}>
        <h3>{props.header}</h3>
        {!open ? (
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ alignSelf: "center" }}
          />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} style={{ alignSelf: "center" }} />
        )}
      </div>
      <div className={"inner " + open}>
        <p>{props.text}</p>
      </div>
    </StyledAccordion>
  );
};

export default Accordion;
