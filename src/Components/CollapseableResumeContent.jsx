import { Collapse } from "react-collapse";
import React, { useState } from "react";
import PropTypes from "prop-types";

const CollapseableResumeContent = ({ Content }) => {
  const [opened, isToggleOpened] = useState(false);

  if (Content.toString() === "") {
    return null;
  }

  if (opened) {
    return (
      <div onClick={() => isToggleOpened(!opened)}>
        <Collapse isOpened={opened}>
          {Content.map((value, index) => {
            return <p>{value}</p>;
          })}
        </Collapse>

        <p className="scrolldown center-text">
          <a className="smoothscroll" title="Back to Top">
            <i className="icon-up-open"></i>
          </a>
        </p>
      </div>
    );
  } else {
    return (
      <div onClick={() => isToggleOpened(!opened)}>
        <Collapse isOpened={!opened}>
          <p className="scrolldown center-text">
            <a className="smoothscroll">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </Collapse>
      </div>
    );
  }
};

CollapseableResumeContent.propTypes = {
  /*
   * Content to be displayed when content is opened
   */
  Content: PropTypes.array,
  /*
   * Paragraphs: If content to be displayed in more than 1 paragraph
   */
  Paragraph: PropTypes.number,
};

CollapseableResumeContent.defaultProps = {
  Content: ["Nothing to show here!"],
  Paragraph: 1,
};

export default CollapseableResumeContent;
