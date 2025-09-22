"use client";

import React from "react";
import { Button } from "./ui/button";

type Props = {
  path: string;
};

const DownloadCv = ({ path }: Props) => {
  const handleDownload = () => {
    if (path) {
      window.open(path, "_blank");
    }
  };
  return (
    <Button variant="outline" onClick={handleDownload}>
      Download
    </Button>
  );
};

export default DownloadCv;
