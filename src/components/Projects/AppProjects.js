import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import DummyRecipes1 from "../../Assets/Projects/Dummy-Recipes/DummyRecipes1.png";
import DummyRecipes2 from "../../Assets/Projects/Dummy-Recipes/DummyRecipes2.png";
import DummyRecipes3 from "../../Assets/Projects/Dummy-Recipes/DummyRecipes3.png";
import DummyRecipes4 from "../../Assets/Projects/Dummy-Recipes/DummyRecipes4.png";
import DummyRecipes5 from "../../Assets/Projects/Dummy-Recipes/DummyRecipes5.png";
import DummyRecipes6 from "../../Assets/Projects/Dummy-Recipes/DummyRecipes6.png";

import AccountManage1 from "../../Assets/Projects/Account-Manage/AccountManage1.png";
import AccountManage2 from "../../Assets/Projects/Account-Manage/AccountManage2.png";
import AccountManage3 from "../../Assets/Projects/Account-Manage/AccountManage3.png";

import Stock1 from "../../Assets/Projects/Stock/Stock1.png";
import Stock2 from "../../Assets/Projects/Stock/Stock2.png";
import Stock3 from "../../Assets/Projects/Stock/Stock3.png";

function AppProjects() {
  return (
    <Container>
      <Row>
        <Col md={3} className="project-card">
          <ProjectCard
            images={[Stock1, Stock2, Stock3]}
            imgPath={Stock1}
            isApp={true}
            title="Stock View (TS)"
            description="App build with React Native Expo. TS, ZOD, graphql (by StepZen). A stock view APP, user could tracking the latest stock information."
            ghLink="https://github.com/fengbanjiazhu/Stock"
          />
        </Col>

        <Col md={3} className="project-card">
          <ProjectCard
            images={[
              DummyRecipes1,
              DummyRecipes2,
              DummyRecipes3,
              DummyRecipes4,
              DummyRecipes5,
              DummyRecipes6,
            ]}
            imgPath={DummyRecipes1}
            isApp={true}
            title="Dummy Recipes (JS)"
            description="App build with React Native. Redux, react-navigation. A recipe displaying app, user could mark their favorite recipe or filter recipe."
            ghLink="https://github.com/fengbanjiazhu/native-test2"
          />
        </Col>

        <Col md={3} className="project-card">
          <ProjectCard
            images={[AccountManage1, AccountManage2, AccountManage3]}
            imgPath={AccountManage1}
            isApp={true}
            title="Account Manage (TS)"
            description="App build with React Native Expo. TypeScript, ZOD Validate, native-base, react-navigation. An account manage APP, user could input their account & password, with edit function."
            ghLink="https://github.com/fengbanjiazhu/Account-Manage"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AppProjects;
