import React from "react"
import { VisibilityHiddenStyled } from "./styles"

interface IProps {
  children: React.ReactNode
}

const VisibilityHidden: React.FC<IProps> = ({ children }) => (
  <VisibilityHiddenStyled>
    {children}
  </VisibilityHiddenStyled>
)

export default VisibilityHidden
