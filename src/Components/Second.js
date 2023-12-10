import styled from "styled-components";
import Shortner from "./Shortner";
import Cards from "./Cards";

const Container = styled.div`
  width: auto;
  height: 100%;
  background-color: hsl(0, 0%, 90%);
  display: flex;
  align-items: center;
  padding: 0 200px;
  gap: 5rem;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;
function Second() {
  return (
    <Container>
      <Shortner />
      <div className="flex items-center justify-center text-center flex-col">
        <h2 className="capitalize text-2xl text-center font-bold">
          Advanced statistics
        </h2>
        <span className="text-gray-500 text-center w-[65%]">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </span>
      </div>
      <Cards />
    </Container>
  );
}

export default Second;
