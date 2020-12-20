# material-ui-multiple-select

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/material-ui-multiple-select.svg)](https://www.npmjs.com/package/material-ui-multiple-select) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save material-ui-multiple-select
```

## Usage

```jsx
import React from 'react'
import MultipleSelect from 'material-ui-multiple-select'

const App = () => {
  const QuestionsFields = [
    { id: 1, question: 'Budget', disabled: false },
    { id: 2, question: 'Food allergies', disabled: false },
    { id: 3, question: 'Number of people', disabled: false },
    { id: 4, question: 'Special restictions', disabled: false }
  ]

  return <MultipleSelect QuestionsFields={QuestionsFields} />
}

export default App
```

## License

MIT © [](https://github.com/)
