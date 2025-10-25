import { SearchContainer, SearchInput, SearchIcon } from './styles';

function SearchBar({ value, onChange, placeholder = "Bucar Pokémon..." }) {
    return (
        <SearchContainer>
            <SearchIcon>🔎</SearchIcon>
            <SearchInput
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            >
            </SearchInput>
        </SearchContainer>
    );
}

export default SearchBar;