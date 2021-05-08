import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const App = () => {
  const text = `
  ## markdown preview
  # Give it a try!
  ### here are some examples:
  
  > Here is a quote by someone famous  
  #### Heading four  
  Lorem ipsum **BOLD** sit amet consectetur adipisicing elit.
  
  [here is a link to Google](https://www.google.com)

  ![image](https://images.pexels.com/photos/7438529/pexels-photo-7438529.jpeg)

  \`\`\`
  console.log('Here's code!')
  \`\`\`
  `
  const [markdown, setMarkdown] = useState(text)

  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App
