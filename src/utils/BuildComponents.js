import React from "react"

export function generateComponents(theme) {
    const dynamicComponents = {};

    Object.keys(theme).forEach((tag) => {
        const TagName = tag;

        dynamicComponents[tag] = ({ node, ...props }) => (
            <TagName className={theme[tag]} {...props} />
        );
    });

    return dynamicComponents;
}