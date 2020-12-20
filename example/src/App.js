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
