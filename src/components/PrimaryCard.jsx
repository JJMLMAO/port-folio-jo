import styled from "styled-components"

const CardContainer = styled.div`
    /* border: 1px solid black; */
    background-color: wheat;
    color: black;
    border-radius: 1.2rem;
    max-width: 30rem;
    padding: 1rem 2rem;
    margin-bottom: 1rem;

`

const PrimaryCard = ({ jobTitle, companyName, dateStart, dateEnd, techStack}) => (
  <CardContainer>
    <div>
        <h3>{jobTitle} @ {companyName}</h3>
    </div>
    <div>
        {dateStart} - {dateEnd}
    </div> 
    <div>{ techStack }</div>
    
  </CardContainer>
);

export default PrimaryCard;