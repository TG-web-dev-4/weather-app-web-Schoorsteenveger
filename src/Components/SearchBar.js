import React from 'react'
import { StyledSearchBar } from './styled/SearchBar.styled'
import { StyledInput } from './styled/Input.styled'
import { StyledButton } from './styled/Button.styled'



const SearchBar = () => {
    return (
        <StyledSearchBar>
            <StyledInput onChange={""} type="text" value={""} />
            <StyledButton onClick={""} type="submit">Submit</StyledButton>
        </StyledSearchBar>
    )
}

export default SearchBar

