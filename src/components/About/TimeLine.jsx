import React from "react";
import { Timeline } from "antd";
import { ImPointRight } from "react-icons/im";

const TimeLine = () => (
  <Timeline
    style={{ color: "white", fontSize: "1.25rem" }}
    mode="right"
    items={[
      {
        color: "green",
        children: (
          <>
            <h5>2021</h5>
            <p>Self learning through online bootcamp while working</p>
          </>
        ),
      },
      {
        color: "green",
        children: (
          <>
            <h5>2022</h5>
            <p>Continue learning through Udemy online</p>
          </>
        ),
      },
      {
        children: (
          <>
            <h5>2023</h5>
            <p>Gaining an IT diploma from TAFE NSW</p>
            <p>Learning Improving application performance</p>
            <p>Learning about React Native</p>
          </>
        ),
      },
      {
        children: (
          <>
            <h5>2024</h5>
            <p>Learning about Next.JS</p>

            <h6 id="currentProcess">
              {" "}
              <ImPointRight /> Full time student in UTS
            </h6>
          </>
        ),
      },
      {
        color: "gray",
        children: (
          <>
            <h5>My future learning plan:</h5>

            <p>Learning about Game development</p>
          </>
        ),
      },
    ]}
  />
);

export default TimeLine;
