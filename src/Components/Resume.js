import React, { Component } from "react";
import CollapseableResumeContent from "./CollapseableResumeContent.jsx";
import SkillsBar from "./SkillsBar.jsx";

class Resume extends Component {

  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <CollapseableResumeContent Content={[education.description]} />
            {/* <p>{education.description}</p> */}
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <CollapseableResumeContent
              Content={[
                work.description1,
                work.description2,
                work.description3,
              ]}
            />
          </div>
        );
      });
      var internships = this.props.data.internships.map(
        (internships, index) => {
          if (index === 0) {
            return (
              <div className="row internships" key={internships.company}>
                <h3>{internships.company}</h3>
                <p className="info">
                  {internships.title}
                  <span>&bull;</span>{" "}
                  <em className="date">{internships.years}</em>
                </p>
                <CollapseableResumeContent
                  Content={[internships.description]}
                />
              </div>
            );
          } else if (index === 4) {
            return (
              <div className="row row-caveat" key={internships.company}>
                <h3>{internships.company}</h3>
                <p className="info">
                  {internships.title}
                  <span>&bull;</span>{" "}
                  <em className="date">{internships.years}</em>
                </p>
                <CollapseableResumeContent
                  Content={[internships.description]}
                />
              </div>
            );
          } else {
            return (
              <div
                className="row internships row-caveat"
                key={internships.company}
              >
                <h3>{internships.company}</h3>
                <p className="info">
                  {internships.title}
                  <span>&bull;</span>{" "}
                  <em className="date">{internships.years}</em>
                </p>
                <CollapseableResumeContent
                  Content={[internships.description]}
                />
              </div>
            );
          }
        }
      );

      var skills = this.props.data.skills.map((skills) => {
        
        return (
          <li key={skills.name}>
            <SkillsBar observer={null} name={skills.name} level={skills.level} />
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Full-time Work</span>
            </h1>
          </div>
          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row internships">
          <div className="three columns header-col">
            <h1>
              <span>Internships</span>
            </h1>
          </div>

          <div className="nine columns main-col">{internships}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
