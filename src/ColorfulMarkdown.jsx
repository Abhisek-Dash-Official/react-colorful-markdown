import React from "react";
import ReactMarkdown from "react-markdown";
import { themeMap } from "./themes";
import { generateComponents } from "./utils/BuildComponents";

export const ColorfulMarkdown = ({
  content,
  color = "default",
  themeOverrides = {},
  components: userComponents = {},
  ...props
}) => {
  const baseTheme = themeMap[color] || themeMap.default;

  const finalThemeClasses = { ...baseTheme, ...themeOverrides };

  const generatedComponents = generateComponents(finalThemeClasses);

  const finalComponents = { ...generatedComponents, ...userComponents };

  return (
    <ReactMarkdown components={finalComponents} {...props}>
      {content}
    </ReactMarkdown>
  );
};
