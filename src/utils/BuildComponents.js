import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function generateComponents(theme) {
    const dynamicComponents = {};

    Object.keys(theme).forEach((tag) => {
        if (tag !== "code") {
            const TagName = tag;
            dynamicComponents[tag] = ({ node, ...props }) => (
                <TagName className={theme[tag]} {...props} />
            );
        }
    });

    dynamicComponents.code = ({ node, inline, className, children, ...props }) => {
        const match = /language-(\w+)/.exec(className || "");

        if (!inline && match) {
            return (
                <SyntaxHighlighter PreTag="div" className="rounded-lg my-4 shadow-sm text-sm" language="{match[1]}" style="{oneDark}" {...props}>
                    {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
            );
        }

        return (
            <code className={theme.code} {...props}>
                {children}
            </code>
        );
    };

    return dynamicComponents;
}