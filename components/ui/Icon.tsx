import React from "react";
import {
  IconBrandGithub,
  IconBrandReact,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandDjango,
  IconBrandMongodb,
  IconBrandGit,
  IconBrandPowershell,
  IconBrandRust,
  IconCoffee,
  IconBrandGolang,
  IconBrandSass,
} from "@tabler/icons-react";
type Props = {
  size?: number;
  color?: string;
  className?: string;
  name: string;
  stroke?: number;
};

const IconCustom = ({ stroke = 1, name, ...rest }: Props) => {
  switch (name) {
    case "github":
      return <IconBrandGithub stroke={stroke} {...rest} />;
    case "react":
      return <IconBrandReact stroke={stroke} {...rest} />;
    case "javascript":
      return <IconBrandJavascript stroke={stroke} {...rest} />;
    case "typescript":
      return <IconBrandTypescript stroke={stroke} {...rest} />;
    case "css3":
    case "css":
      return <IconBrandCss3 stroke={stroke} {...rest} />;
    case "html5":
    case "html":
      return <IconBrandHtml5 stroke={stroke} {...rest} />;
    case "sass":
    case "scss":
      return <IconBrandSass stroke={stroke} {...rest} />;
    case "nextjs":
      return <IconBrandNextjs stroke={stroke} {...rest} />;
    case "tailwind":
      return <IconBrandTailwind stroke={stroke} {...rest} />;
    case "nodejs":
      return <IconBrandNodejs stroke={stroke} {...rest} />;
    case "python":
      return <IconBrandPython stroke={stroke} {...rest} />;
    case "django":
      return <IconBrandDjango stroke={stroke} {...rest} />;
    case "mongodb":
      return <IconBrandMongodb stroke={stroke} {...rest} />;
    case "git":
      return <IconBrandGit stroke={stroke} {...rest} />;
    case "powershell":
    case "shell":
      return <IconBrandPowershell stroke={stroke} {...rest} />;
    case "rust":
      return <IconBrandRust stroke={stroke} {...rest} />;
    case "go":
    case "golang":
      return <IconBrandGolang stroke={stroke} {...rest} />;
    case "java":
      return <IconCoffee stroke={stroke} {...rest} />;

    default:
      return name;
  }
};

export default IconCustom;
