import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';
import Taxonomy from './Taxonomy';
import {taxTerms} from './Terms'

ReactDOM.render(
  <ThemeProvider theme={{}}>
    <Taxonomy outputFieldId="id_taxonomy_json" taxonomyTerms={taxTerms} />
  </ThemeProvider>,
  document.getElementById('root')
);
