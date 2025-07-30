import { Timeline } from "antd";
import { ImPointRight } from "react-icons/im";

const TimeLine = () => (
  <>
    <Timeline
      style={{ color: "white", fontSize: "1.25rem", textAlign: "left" }}
      mode="left"
      items={[
        {
          color: "green",
          children: (
            <>
              <h5>2021 & 2022</h5>
              <p>5th year of running on my own business</p>
              <p>Self learning programming through online bootcamp & Udemy</p>
            </>
          ),
        },
        {
          children: (
            <>
              <h5>2023</h5>
              <p>Gaining an IT diploma from TAFE NSW</p>
              <p>Freelancer & Personal projects</p>
            </>
          ),
        },
        {
          color: "green",
          children: (
            <>
              <h5>2024</h5>
              <p>Full time student in UTS</p>
              <p>Majoring in Software Development; Sub-majoring in Game Development</p>
              <p>Systematic learning about Computer Science.</p>
            </>
          ),
        },
        {
          children: (
            <>
              <h5>2025</h5>
              <p>Full time student in UTS</p>
              <p>Learning / Playing with AI tools</p>
              <h6 id="currentProcess">
                {" "}
                <ImPointRight /> Working on personal projects
              </h6>
            </>
          ),
        },
        {
          color: "gray",
          children: (
            <>
              <h5>Working towards to a good (Software || Game) Developer</h5>
            </>
          ),
        },
      ]}
    />
  </>
);

export default TimeLine;
