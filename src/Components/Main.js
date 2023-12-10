import styled from "styled-components";
import Button from "../UI/Button";
import landing from "../Assets/illustration-working.svg";
const Home = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px 0 200px;
  flex-direction: row;
  height: 100vh;
  
  @media only screen and (max-width: 768px) {
    padding: 20px;
    flex-direction: column-reverse;
    justify-content:center;
    gap: 50px;
    margin-bottom: 40px;
  }
`;
function Main() {
  return (
    <div>
      <Home>
        <div className="flex flex-col space-y-4 items-center sm:items-start gap-2">
          <h1
            className="sm:text-6xl text-4xl font-bold sm:w-[80%] text-center sm:text-start"
            style={{ color: "hsl(255, 11%, 22%)" }}
          >
            More than just shorter Links 😇
          </h1>
          <p
            className="sm:w-[70%] text-[18px] font-semibold text-center sm:start"
            style={{ color: "hsl(257, 7%, 63%)" }}
          >
            Build your brand recognition and get detailed insights on how your
            links are performing
          </p>
          <Button className="rounded-full">Get Started</Button>
        </div>
        <img src={landing} alt="landing" className="mt-6" />
      </Home>
    </div>
  );
}

export default Main;
