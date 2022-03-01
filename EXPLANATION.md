# Explanations
## Explanation of all the files generated using create-react-app and how react app runs
### `public/index.html`
When the application starts this is the first page that is loaded. This will be the only html file in the entire application since React is generally Written using JSX/TSX. Also, this file has a line of code   
`<div id=”root”></div>`.  
This line is very significant since all the application components are loaded into this div.
### `src/index.tsx`
This is the javascript/typescript file corresponding to index.html. This file has the following line of code which is very significant.   
`ReactDOM.render(<App />, document.getElementById(‘root’));`  
The above line of code is telling that App Component has to be loaded into an html element with id root. This is nothing but the div element present in index.html.

### `src/index.css`
The CSS file corresponding to index.tsx.

### `src/App.tsx`
This is the file for App Component. App Component is the main component in React which acts as a container for all other components.

### `src/App.css`
This is the CSS file corresponding to App Component.

### `package.json`
This File has the list of node dependencies which are needed.
### `tsconfig.json`
The presence of this file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project.

### `README.md`
A README file is an essential guide that gives other developers a detailed description of the project.

### `build`
This is the folder where the built files are stored. React Apps can be developed using either JSX/TSX, or normal JavaScript itself, but using JSX/TSX definitely makes things easier to code for the developer. But browsers do not understand JSX/TSX. So JSX/TSX needs to be converted into javascript before deploying. These converted files are stored in the build folder after bundling and minification. In order to see the build folder Run the following command `npm run build`
       
### `package-lock.json`
 [Role of package-lock.json](https://stackoverflow.com/questions/44297803/what-is-the-role-of-the-package-lock-json)
### `Instruction to how to write .md files`
`Link`  
[http://localhost:3000](http://localhost:3000)  
`Note`  
**Note: test note!**  
`Newline`  
space+space+enter