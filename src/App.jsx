import React from "react";
import { Route, Routes } from "react-router-dom";
import CKEditorComponent from "./components/ckeditor";

export default function App() {
  return (
    <>
      <div style={{ maxWidth: "70%", margin: "0 auto" }}>
        <CKEditorComponent />
      </div>
    </>
  );
}
