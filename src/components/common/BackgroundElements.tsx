"use client";

import React from "react";

export function BackgroundElements() {
  return (
    <>
      {/* Fixed film-grain overlay at 4% opacity, pointer-events none */}
      <div className="film-grain" aria-hidden="true" />

      {/* Thin vertical grid lines (4 columns, 1px, 8% opacity cocoa) across page background */}
      <div className="vertical-grid-lines" aria-hidden="true">
        <div className="vertical-grid-line" />
        <div className="vertical-grid-line" />
        <div className="vertical-grid-line" />
        <div className="vertical-grid-line" />
        <div className="vertical-grid-line" />
      </div>
    </>
  );
}
