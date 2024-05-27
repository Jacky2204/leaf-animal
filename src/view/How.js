import React from "react";
import { Main } from "./../component/How.js";
import { Process } from "./../component/How.js";
import { Block } from "./../component/How.js";
import { Back } from "./../component/How.js";
import {Navbar} from "./../component/Navbar.js"


import p1 from "./../component/how-img/p1.webp";
import p2 from "./../component/how-img/p2.webp";
import p3 from "./../component/how-img/p3.webp";
import p4 from "./../component/how-img/p4.webp";
import p5 from "./../component/how-img/p5.webp";

export function How() {
  return (
    <>
      {/* call component(function) from in the component folder*/}
      <Navbar/>
      <Main />

      <Process
        i1={p1}
        i2={p2}
        h1={1}
        h2={2}
        p1={"Visit our website www.leafanimals.com"}
        p2={
          "On the homepage select 'Dogs' or 'Cats' to browse either.Alternatively, you can click on 'Adopt' in the menu bar and choose from there."
        }
      />

      <Process
        i1={p3}
        i2={p4}
        h1={3}
        h2={4}
        p1={
          "When you see an animal that interests you, click on 'View Profile'"
        }
        p2={
          "Scroll down and learn more about the animal from their detailed profile and if they seem like a good match, click on 'Adopt Me' ."
        }
      />

      <Process
        i1={p5}
        h1={5}
        h2={6}
        p1={"Fill out the adoption application for the animal you chose."}
        p2={
          "If your application is approved, our team will contact you for an online interview using the contact information in your application."
        }
      />

      <Block />
      <Back />
    </>
  );
}
