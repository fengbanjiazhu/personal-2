import React from "react";
import { Timeline } from "antd";

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
            <p>Seeking for an industry opportunity</p>
          </>
        ),
      },
      {
        color: "gray",
        children: (
          <>
            <h5>My future learning plan:</h5>
            <p>Learning about React Native</p>
            <p>Learning about Next.JS</p>
            <p>Or any language industry needs...</p>
          </>
        ),
      },
    ]}
  />
);

export default TimeLine;
