import { keyframes, css, Global } from '@emotion/core'
import styled from '@emotion/styled'

const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        background-color: #f0f6fe;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 16px;
      }
    `}
  />
)

export default GlobalStyles