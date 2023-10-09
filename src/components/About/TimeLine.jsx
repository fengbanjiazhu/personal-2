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
            <p>Shop owner</p>
            <p>Learning coding part-timely with online bootcamp</p>
          </>
        ),
      },
      {
        color: "green",
        children: (
          <>
            <h5>mid 2022</h5>
            <p>Improving myself with Udemy online</p>
          </>
        ),
      },
      {
        children: (
          <>
            <h5>2023</h5>
            <p>Gaining an IT diploma from TAFE NSW</p>
            <p>Learning Improving application performance</p>

            <h6 id="currentProcess">
              {" "}
              <ImPointRight /> Currently Learning about React Native
            </h6>
          </>
        ),
      },
      {
        color: "gray",
        children: (
          <>
            <h5>My future learning plan:</h5>
            <p>Learning about Next.JS & Remix</p>
          </>
        ),
      },
    ]}
  />
);

export default TimeLine;
