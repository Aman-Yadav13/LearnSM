"use client";

import dynamic from "next/dynamic";
import React, { useMemo } from "react";

import "react-quill/dist/quill.bubble.css";

interface PreviewProps {
  value: string;
}

export const Preview = ({ value }: PreviewProps) => {
  //Imported ReactQuill without ssr(to avoid hydration errors)
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  return <ReactQuill theme="bubble" value={value} readOnly />;
};
