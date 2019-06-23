import * as React from "react"
import styled from "@emotion/styled"
import { widths } from "../../styles/variables"

interface IContainerProps {
	children: React.ReactNode
}

export const Container = ({ children }: IContainerProps) => (
	<StyledContainer>{children}</StyledContainer>
)

const StyledContainer = styled.section`
	max-width: ${widths.lg}px;
	margin: 0 auto;
	padding: 0 16px;
`
