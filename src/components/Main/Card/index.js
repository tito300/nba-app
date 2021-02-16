import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { 
	Container, 
	Name, 
	PlayerImg, 
	Team, 
	Wrapper, 
	EditIcon,
	CardIcons,
	FavoriteIcon
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import EditPlayer from '../EditPlayer';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../../../store/types';

const SERVER_URL = 'http://localhost:3008'; // from env variable ideally

const Card = ({ data }) => {
	const dispatch = useDispatch();
	const [editMode, setEditMode] = useState(false);
	const [Player, setPlayer] = useState(data);	
	const teamsMap = useSelector(state => state.nba.teamsMap);
	const teamName = teamsMap[Player.team] ?? 'n/a';

	const favoritesMap = useSelector(state => state.nba.favoritesMap)
	const isFavorite = favoritesMap[Player.id];

	function updatePlayer(playerEdits) {
		setPlayer({
			...Player,
			...playerEdits
		})
		setEditMode(false);
    }
	
	/**
	 * Here i'm using an optimistic approach with a fallback
	 * i.e updating local state before immediately to improve UX
	 * this approach is only use on non critical functionality
	 */
	function handleFavorite() {
		if (isFavorite) {
			dispatch({ type: REMOVE_FAVORITE, payload: { id: Player.id, teamId: Player.team } });

			saveFavorite(false).catch(() => {
				dispatch({ type: ADD_FAVORITE, payload: { id: Player.id, teamId: Player.team }});
				// need to add error message, perhaps a toast bar
			})
		} else {
			dispatch({ type: ADD_FAVORITE, payload: { id: Player.id, teamId: Player.team }});

			saveFavorite(true).catch(() => {
				dispatch({ type: REMOVE_FAVORITE, payload: { id: Player.id, teamId: Player.team } });
				// need to add error message, perhaps a toast bar
			})
		}
	}

	function saveFavorite(isFavorite) {
		if (isFavorite) {
			return axios.post(SERVER_URL + '/favorites', { 
				id: Player.id, 
				teamId: Player.team // in case we need to view favorites per team 
			})
		} else {
			return axios.delete(SERVER_URL + `/favorites/${Player.id}`);
		}
	}
	
	return (
	<Container>
		<Wrapper>
			{!editMode && <>
				<Name>{Player.name}</Name>
				<PlayerImg src={SERVER_URL + '/' + Player.image} alt={Player.name + ' image'} />
				<Team>{teamName}</Team>
				<CardIcons>
					{!isFavorite && <FavoriteIcon onClick={handleFavorite}>&#9734;</FavoriteIcon>}
					{isFavorite && <FavoriteIcon onClick={handleFavorite} highlight={true}>&#9733;</FavoriteIcon>}
					<EditIcon onClick={() => setEditMode(true)}>+</EditIcon>
				</CardIcons>
			</>}
			{editMode && <>
				<EditPlayer close={() => setEditMode(false)} save={updatePlayer} player={Player} />
			</>}
		</Wrapper>
	</Container>
)}

Card.prototype = {
	data: PropTypes.shape({
		name: PropTypes.string,
		image: PropTypes.string,
		team: PropTypes.number,
	})
}

export default Card;
