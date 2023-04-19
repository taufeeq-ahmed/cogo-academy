import React from 'react'
import styles from './styles.module.css'
import { useEffect } from 'react'

const EditorConsole = ({ content }) => {
  let console = {
    log: function (...arg) {
      const element = document.getElementById('output')
      let lineBreak = document.createElement('br')
      for (let i = 0; i < arg.length; i++) {
        let text = document.createTextNode(arg[i])
        if (typeof arg[i] === 'object') {
          text = document.createTextNode(JSON.stringify(arg[i], null, 2))
        }
        let space = document.createTextNode(' ')
        element.append(text)
        element.append(space)
      }
      element.append(lineBreak)
    },
  }

  const clearOutputScreen = () => {
    const paragraph = document.getElementById('output')
    paragraph.innerText = ''
  }

  useEffect(() => {
    try {
      clearOutputScreen()
      // eslint-disable-next-line no-eval
      eval(content)
    } catch (e) {
      console.log(e)
    }
  }, [content])

  // console.log(content, 'content')
  return (
    <div>
      <p id="output"></p>
    </div>
  )
}

export default EditorConsole;