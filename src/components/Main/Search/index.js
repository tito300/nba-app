import React, {useState} from "react";
import { Container, SearchInput } from "./styles";

const Search = ({ onSearch }) => {
	const [text, setText] = useState('');

	function handleKeyPress(e) {
		if (e.charCode === 13) {
			onSearch(text);
		}
	}

	return <Container>
		<SearchInput 
			value={text} 
			onChange={e => setText(e.target.value)} 
			onKeyPress={handleKeyPress}
			placeholder="Search..." 
		/>
	</Container>
};

export default Search;
