import styled from "styled-components"
import PrimaryCard from "../components/PrimaryCard";

const ExperienceWrapper = styled.div`
  padding: 2rem 4rem;
`


const Experiences = () => (
  <ExperienceWrapper>
    <h1>My Work Experiences</h1>
    <PrimaryCard
      jobTitle="Software Engineer"
      companyName="Bukku"
      dateStart="Jan 2025"
      dateEnd="Present"
      techStack="React, Laravel, Python"
    />
    <PrimaryCard
      jobTitle="Software Engineer"
      companyName="KPMG Malaysia"
      dateStart="October 2023"
      dateEnd="October 2024"
      techStack="Django, MySQL, JQuery, HTML/CSS"
    />
    <PrimaryCard
      jobTitle="Software Engineer Apprentice (Internship)"
      companyName="KPMG Malaysia"
      dateStart="March 2023"
      dateEnd="September 2023"
      techStack="Django, MySQL, JQuery, HTML/CSS"
    />
    <PrimaryCard
      jobTitle="UI/UX Designer (Freelance)"
      companyName="MOI Systems"
      dateStart="May 2023"
      dateEnd="September 2023"
      techStack="Django, MySQL, JQuery, HTML/CSS"
    />
  </ExperienceWrapper>
);

export default Experiences;
