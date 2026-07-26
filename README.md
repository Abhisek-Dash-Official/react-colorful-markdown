# React Colorful Markdown

Transform your standard, plain markdown into beautifully styled and fully customizable React components.

`react-colorful-markdown` is a highly flexible, boilerplate wrapper around `react-markdown`. Instead of hiding the code inside an NPM package, this repository is designed for you to **own the code**. You can drop the files directly into your project, tweak the massive library of color themes, or even bundle and publish it as your own NPM package!

## Features

- **Massive Color Library:** Comes with a huge variety of pre-configured color themes. Just pass a color string and watch your markdown pop.
- **Built-in Syntax Highlighting:** Markdown code blocks (` ``` `) automatically get VS Code-style syntax highlighting (using `oneDark` theme) out of the box!
- **Own the Code:** No NPM black-box. Copy the files directly into your project and customize the core logic to your exact needs.
- **Total Customization:** Override specific HTML tags (e.g., `p`, `h1`, `strong`) on the fly with your own utility classes (like Tailwind CSS).
- **Bring Your Own Components:** Pass custom React components seamlessly alongside the pre-built themes.

## How to Use

Since this is a boilerplate/template, you don't install it via NPM. You bring the code into your project.

### Step 1: Copy the Source Code

Clone this repository and copy the `src` folder into your React project (for example, into a `components/ColorfulMarkdown` folder).

```bash
git clone https://github.com/Abhisek-Dash-Official/react-colorful-markdown.git
```

### Step 2: Install Peer Dependencies

Make sure you install the required dependencies in your project:

```bash
npm install react-markdown react-syntax-highlighter
```

### Step 3: Import and Use

Import the component directly from your local files.

```jsx
import React from "react";
// Adjust the import path based on where you placed the folder
import { ColorfulMarkdown } from "./ColorfulMarkdown";

const markdownContent = `

# Hello World

This is a **colorful** markdown text!
`;

export default function App() {
  return (
    <div className="p-10">
      <ColorfulMarkdown color="emerald" content={markdownContent} />
    </div>
  );
}
```

## Advanced Usage

### Overriding Specific Tags

Want a specific theme, but need to tweak just the `<p>` and `<a>` tags? Use the `themeOverrides` prop.

```jsx
import React from "react";
import { ColorfulMarkdown } from "./ColorfulMarkdown";

export default function App() {
  return (
    <ColorfulMarkdown
      color="yellow"
      content={`
        # Heading
        This is a paragraph with a [link](https://google.com).
      `}
      themeOverrides={{
        p: "text-base leading-relaxed text-gray-700",
        a: "text-rose-500 underline hover:text-blue-700 transition-colors",
      }}
    />
  );
}
```

### Injecting Custom React Components

If you need complete control over a specific element (like adding a custom syntax highlighter for code blocks), use the `components` prop.

```jsx
import React from "react";
import { ColorfulMarkdown } from "./ColorfulMarkdown";
import CustomCodeBlock from "./CustomCodeBlock";

export default function App() {
  return (
    <ColorfulMarkdown
      color="indigo"
      content={`
          \`\`\`js
          console.log("Hello, World!");
          \`\`\`
      `}
      components={{
        code: CustomCodeBlock,
      }}
    />
  );
}
```

## Want to publish it?

If you want to publish this as your own NPM package, you absolutely can!
The project includes a `tsup` configuration and a `package.json` ready for bundling. Just run:

```bash
npm run build
npm publish
```

## Contributing

Feel free to fork this repository, add more beautiful color themes to the `themes/` directory, and submit a Pull Request!
