import styled from "styled-components";
import brand from "../Assets/icon-brand-recognition.svg";
import brand2 from "../Assets/icon-detailed-records.svg";
import brand3 from "../Assets/icon-fully-customizable.svg";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  width: 100%;
  position: relative;
  gap: 20px;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 8px;
    background: hsl(180, 66%, 49%);
    top: 50%;
  }
  margin-bottom: 150px;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    gap:80px;
    text-align:center;
    flex-direction: column;
    &::before {
      content: "";
      position: absolute;
      width: 2%;
      height: 80%;
      top:10%;
      left: 50%;
      
    }
  }
`;
const H2 = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.75rem;
  text-transform: capitalize;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  padding: 40px 25px;
  border-radius: 5px;

  @media only screen and (max-width:768px){
    align-items: center;
  }
`;

const Img = styled.div`
  position: absolute;
  top: -35px;
  background-color: hsl(257, 27%, 26%);
  border-radius: 50%;
  padding: 15px;
  margin-left: 5px;
`;

const P = styled.p`
  font-size: 16px;
  font-weight: 500px;
  color: hsl(0, 0%, 65%);
`;
function Cards() {
  return (
    <Container>
      <Card className="translate-y-0">
        <Img>
          <img src={brand} alt="#" className="w-8 h-8" />
        </Img>
        <H2>brand recognition</H2>
        <P>
          Brand recognition is a concept used in advertising and marketing. It
          is considered successful when people are able to recognize a brand
          through visual or auditory cues .
        </P>
      </Card>

      <Card className="translate-y-0 sm:translate-y-10">
        <Img>
          <img src={brand2} alt="#" className="w-8 h-8" />
        </Img>
        <H2>Detailed Records</H2>
        <P>
          Brand recognition is a concept used in advertising and marketing. It
          is considered successful when people are able to recognize a brand
          through visual or auditory cues .
        </P>
      </Card>
      <Card className="translate-y-0 sm:translate-y-20">
        <Img>
          <img src={brand3} alt="#" className="w-8 h-8" />
        </Img>
        <H2>Fully Customizable</H2>
        <P>
          Brand recognition is a concept used in advertising and marketing. It
          is considered successful when people are able to recognize a brand
          through visual or auditory cues .
        </P>
      </Card>
    </Container>
  );
}

export default Cards;
