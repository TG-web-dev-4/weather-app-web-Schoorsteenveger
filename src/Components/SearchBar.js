import React from 'react'
import { StyledSearchBar } from './styled/SearchBar.styled'
import { StyledInput } from './styled/Input.styled'
import { StyledButton } from './styled/Button.styled'



const SearchBar = () => {
    return (
        <StyledSearchBar>
            <StyledInput type="text" onChange={"" } placeholder="Search..." value= "" onKeyPress={"search"}/>
            {/* <StyledButton onClick={""} type="submit">Submit</StyledButton> */}
        </StyledSearchBar>
    )
}

export default SearchBar
