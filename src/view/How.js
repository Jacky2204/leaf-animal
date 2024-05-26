import React from "react";
import { Main } from "../Component/How.js";
import { Process } from "../Component/How.js";
import { Dic } from "../Component/How.js";

export function How() {
  return (
    <>

    {/* call component(function) from in the component folder*/}
      <Main />
      <Process/>
      <Process/>
      <Process/>
      <Dic/>
    </>
  );
}
