"use client";
import { Icon as IconComp, IconProps } from "@iconify/react";
import React from "react";

interface Props extends IconProps {}

export default function Icon(props: Props) {
  return <IconComp {...props} />;
}
