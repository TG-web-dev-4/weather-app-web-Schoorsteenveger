import React, { useState } from 'react'
import { StyledSearchBar } from './styled/SearchBar.styled'
import { StyledInput } from './styled/Input.styled'
// import { StyledButton } from './styled/Button.styled'


const SearchBar = ({ input, setInput }) => {
    const inputHandler = (event) => {
        if (event.onKeyPress !== "Enter") return;
        setInput(input)
    }
    return <StyledSearchBar>
        <StyledInput type="text" className="search_bar" placeholder="Search..." onChange={(event) => setInput(event.target.value)} value={input} onKeyPress={inputHandler}
        />
        {/* <StyledInput type="text" placeholder="Search..." value={input} onKeyPress={inputHandler} /> */}
        {/* <StyledButton onClick={""} type="submit">Submit</StyledButton> */}
    </StyledSearchBar>;
}

export default SearchBar;
