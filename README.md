This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder and a copy of the main application without the assets is saved in the `dist` folder<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `code sample`
Properties includes

taxonomyTerms: [ARRAY_OF_TERMS]
outputFieldId: "JSON_OUTPUT_ELEMENT_ID"
termsDisplayText: "COPY FOR TAXONOMY TERMS"
assignedDisplayText: "COPY FOR ALREADY ASSIGNED TAXONOMIES"

This is what the render method should look like
`ReactDOM.render(
    <Taxonomy outputFieldId={JSON_OUTPUT_ELEMENT_ID} taxonomyTerms={ARRAY_OF_TERMS} />
  document.getElementById('root')
);`
