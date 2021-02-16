import React from 'react';
import { useSelector } from 'react-redux';
import { Title, NavContainer, NavLinks, Favorites } from './styles'

export default function NavBar() {
    const favorites = useSelector(state => state.nba.favorites);

    return (
        <NavContainer>
            <Title>NBA Interview</Title>
            <NavLinks>
                <Favorites>&#9733; {favorites.length}</Favorites>
            </NavLinks>
        </NavContainer>
    )
}
