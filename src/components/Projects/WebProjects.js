import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import uptown1 from "../../Assets/Projects/uptown/uptown-1.jpg";
import uptown2 from "../../Assets/Projects/uptown/uptown-2.jpg";
import uptown3 from "../../Assets/Projects/uptown/uptown-3.jpg";
import uptown4 from "../../Assets/Projects/uptown/uptown-4.jpg";
import uptown5 from "../../Assets/Projects/uptown/uptown-5.jpg";

import phpLms1 from "../../Assets/Projects/php-lms/php-lms-1.jpg";
import phpLms2 from "../../Assets/Projects/php-lms/php-lms-2.jpg";

import wildOasis1 from "../../Assets/Projects/wild-oasis/the-wild-oasis-1.jpg";
import wildOasis2 from "../../Assets/Projects/wild-oasis/the-wild-oasis-2.jpg";
import wildOasis3 from "../../Assets/Projects/wild-oasis/the-wild-oasis-3.jpg";

import nextOasis1 from "../../Assets/Projects/next-oasis/next-oasis-1.jpg";
import nextOasis2 from "../../Assets/Projects/next-oasis/next-oasis-2.jpg";

import xml1 from "../../Assets/Projects/XML/XML.jpg";
import xml2 from "../../Assets/Projects/XML/XML2.jpg";

import nft1 from "../../Assets/Projects/NetFunTools/NetFunTools-1.jpg";
import nft2 from "../../Assets/Projects/NetFunTools/NetFunTools-2.jpg";

import natours from "../../Assets/Projects/natours.jpg";
import forkify from "../../Assets/Projects/forkify.jpg";
import pokedex from "../../Assets/Projects/poke-dex.jpg";
import reactVitePizza from "../../Assets/Projects/react-pizza.jpg";
import dummyQuotes from "../../Assets/Projects/dummy-quotes.jpg";

// IMAGE SIZE: 1512*830

function WebProjects() {
  return (
    <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {/* Uptown */}
        <Col md={4} className="project-card">
          <ProjectCard
            images={[uptown1, uptown2, uptown3, uptown4, uptown5]}
            imgPath={uptown1}
            isApp={false}
            title="Uptown project"
            hosting="hosted"
            description="A MERN stack web app. JWT for Validation. Payment system with Stripe. Email system with SendGrid. Chatbot with Google DialogFlow."
            ghLink="https://github.com/fengbanjiazhu/Uptown"
            demoLink="https://jeff-uptown.netlify.app/"
          />
        </Col>

        {/* NetFun Tool */}
        <Col md={4} className="project-card">
          <ProjectCard
            images={[nft1, nft2]}
            imgPath={nft1}
            isApp={false}
            title="NetFun Tools"
            hosting="hosted"
            description="A light-weight tool for Network Fundamental. Made for fun. Typescript, React Router, Shadcn/UI, TailwindCSS."
            ghLink="https://github.com/fengbanjiazhu/NetFunTools"
            demoLink="https://netfuntool.netlify.app/"
          />
        </Col>

        {/* Next Oasis */}
        <Col md={4} className="project-card">
          <ProjectCard
            images={[nextOasis1, nextOasis2]}
            imgPath={nextOasis1}
            isApp={false}
            title="Next Oasis"
            hosting="hosted"
            description="Build with Next.Js, SSR web application. Next Auth, Supabase."
            ghLink="https://github.com/fengbanjiazhu/oasis-next"
            demoLink="https://oasis-next-delta.vercel.app/"
          />
        </Col>

        {/* Natours */}
        <Col md={4} className="project-card">
          <ProjectCard
            images={[natours]}
            imgPath={natours}
            isApp={false}
            title="Natours"
            hosting="hosted"
            description="Server side rendering with Node.JS. Tour booking website."
            ghLink="https://github.com/fengbanjiazhu/Natours"
            demoLink="https://natours-project-7nqu.onrender.com/"
          />
        </Col>

        {/* PHP-LMS */}
        <Col md={4} className="project-card">
          <ProjectCard
            images={[phpLms1, phpLms2]}
            imgPath={phpLms1}
            isApp={false}
            title="PHP LMS"
            description="PHP library management system, with admin page for CMS."
            ghLink="https://github.com/fengbanjiazhu/php-LMS"
          />
        </Col>

        {/* pokedex */}
        <Col md={4} className="project-card">
          <ProjectCard
            images={[pokedex]}
            imgPath={pokedex}
            isApp={false}
            title="Pokedex"
            hosting="hosted"
            description="Build with pure JS. Searching for pokemon details."
            ghLink="https://github.com/fengbanjiazhu/PokeDex"
            demoLink="https://fengbanjiazhu.github.io/PokeDex/"
          />
        </Col>

        {/* react-pizza */}
        <Col md={4} className="project-card">
          <ProjectCard
            images={[reactVitePizza]}
            imgPath={reactVitePizza}
            isApp={false}
            title="React Pizza"
            hosting="hosted"
            description="React focused project."
            ghLink="https://github.com/fengbanjiazhu/React-vite-pizza"
            demoLink="https://dulcet-dasik-a3ce2f.netlify.app/"
          />
        </Col>

        {/* Wild Oasis */}
        <Col md={4} className="project-card">
          <ProjectCard
            images={[wildOasis1, wildOasis2, wildOasis3]}
            imgPath={wildOasis1}
            isApp={false}
            title="Wild Oasis"
            description="Frontend: React, Backend: Supabase. A react booking management web app. React Query; React hook form; Supabase; Styled component"
            ghLink="https://github.com/fengbanjiazhu/Wild-Oasis"
          />
        </Col>

        {/* XML */}
        <Col md={4} className="project-card">
          <ProjectCard
            images={[xml1, xml2]}
            imgPath={xml1}
            isApp={false}
            title="XML"
            description="XML file from learning project with DTD Validation. Self designed."
            ghLink="https://github.com/fengbanjiazhu/XML-DTD"
          />
        </Col>

        {/* react dummy quote */}
        <Col md={4} className="project-card">
          <ProjectCard
            images={[dummyQuotes]}
            imgPath={dummyQuotes}
            isApp={false}
            title="React Dummy Quotes"
            hosting="hosted"
            description="A dummy quotes build with React, uses hooks, router.(Fetching online Firebase API)"
            ghLink="https://github.com/fengbanjiazhu/quotes"
            demoLink="hhttps://fengbanjiazhu.github.io/quotes"
          />
        </Col>

        {/* Forkify */}
        <Col md={4} className="project-card">
          <ProjectCard
            images={[forkify]}
            imgPath={forkify}
            isApp={false}
            title="Forkify"
            hosting="hosted"
            description="Build with pure JS. Front end focused."
            ghLink="https://github.com/fengbanjiazhu/Forkify-practice"
            demoLink="https://silly-ganache-79ed83.netlify.app"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default WebProjects;
