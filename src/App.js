import React from 'react';
import './App.css';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import marked from 'marked';

const defaultMarkdown = `
# Ma page HTML générée à partir du code markdown (titre niveau 1)

___

## Titres (niveau 2)

<br>

### Niveau 3
#### Niveau 4
##### Niveau 5
###### Niveau 6

<br>

## Codes

<br>

\`<div>Code sur une ligne</div>\`

<br>

    const codeBlock = () => {
        return "Code sur plusieurs lignes";
    }

<br>

## Listes

<br>

1. Premier élément de liste
2. Second élément de liste
3. Troisième élément de liste
    - Premier élément imbriqué
    - Second élément imbriqué
4. Quatrième élément de liste

<br>

## Citation

<br>

> blockquote

<br>

## Line break

<br>

Paragraphe avec lignes séparés par un br  
2 espaces à la fin de la ligne précédente  

<br>

## Apparence texte

<br>

**Texte en gras**

<br>

_Texte en italique_

<br>

## Image

<br>

![Logo React](https://cdn.iconscout.com/icon/free/png-256/logo-1889531-1597591.png)

<br>

## Lien

<br>

[Lien vers un guide markdown](https://www.markdownguide.org/basic-syntax/)

***

`

class App extends React.Component {
  state = {
    markdown: defaultMarkdown,
    convertedmarkdown: marked(defaultMarkdown)
  }

  handleChange = (e) => {
    this.setState ({
      markdown: e.target.value,
      convertedmarkdown: marked(e.target.value)
    })
  }
  
  render () {
    return (
      <div className="App">
        <Editor handleChange={this.handleChange} markdown={this.state.markdown} />
        <Previewer handleChange={this.handleChange} convertedmarkdown={this.state.convertedmarkdown} />
      </div>
    );
  }
}

export default App;
