import React, { useState } from 'react'
import { StyledSearchBar } from './styled/SearchBar.styled'
import { StyledInput } from './styled/Input.styled'
import { isCompositeComponentWithType } from 'react-dom/cjs/react-dom-test-utils.development'
// import { StyledButton } from './styled/Button.styled'


const SearchBar = ({ input, setInput }) => {

    const [searchInput, setSearchInput] = useState('')


    const inputHandler = (event) => {


        if (event.key === "Enter") setInput(searchInput)
        return
    }
    return <StyledSearchBar>
        <StyledInput type="text" className="search_bar" placeholder="Search..." onChange={event => setSearchInput(event.target.value)} value={searchInput} onKeyPress={inputHandler}
        />
        {/* <StyledInput type="text" placeholder="Search..." value={input} onKeyPress={inputHandler} /> */}
        {/* <StyledButton onClick={""} type="submit">Submit</StyledButton> */}
    </StyledSearchBar>;
}

export default SearchBar;
