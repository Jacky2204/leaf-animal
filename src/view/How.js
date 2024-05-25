import React from "react";
import { Main } from "./../component/How.js";
import { Process } from "./../component/How.js";
import { Dic } from "./../component/How.js";

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
