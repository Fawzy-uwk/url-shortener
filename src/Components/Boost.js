import styled from "styled-components";
import boost from "../Assets/bg-boost-desktop.svg";
import Button from "../UI/Button";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: hsl(257, 27%, 26%);
  position: relative;
  padding: 50px 20px;
  gap:15px;
`;

const Img = styled.img`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;
function Boost() {
  return (
    <Container>
      <Img src={boost} alt="" />
      <h2 className="text-3xl font-semibold text-center text-white z-10 mb-2">Boost your links today</h2>
      <Button className="rounded-full z-10">Get Started</Button>
    </Container>
  );
}

export default Boost;
