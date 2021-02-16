import React, { useState, useEffect } from 'react';
import Search from "../Search";
import Card from "../Card";
import Err from "../Error";
import axios from 'axios';
import { CardsContainer, PaginateBtn, Paginate, PageText } from "./styles";
import { Loading } from "../../../styles";
import { useDispatch } from "react-redux";
import { ADD_TEAMS, ADD_FAVORITES } from "../../../store/types";
import { parseHeaderLinks } from "../../../util/index";

const SERVER_URL = 'http://localhost:3008'; // from env variable ideally

export default function Players() {
    const [pagination, setPagination] = useState({ 
        page: 1, 
        total: 1, 
        first: SERVER_URL + `/players?_page=1`,
        next: null, 
        prev: null, 
        last: null 
    });
    const [players, setPlayers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch()
    
    useEffect(() => {
      fetchFavorites();
      fetchTeams()
        .then(fetchPlayers); 

      function fetchTeams() {
        return axios.get(SERVER_URL + '/teams')
          .then(res => {
            if (res.status === 200) {
              dispatch({type: ADD_TEAMS, payload: res.data});
            } else {
              setError('Sorry, something went wrong while fetching Teams')
            }
          })
          .catch(err => {
            setError('Sorry, something went wrong while fetching Teams')
            setLoading(false);
          })
      }

      function fetchFavorites() {
        return axios.get(SERVER_URL + '/favorites')
          .then(res => {
            if (res.status === 200) {
              dispatch({type: ADD_FAVORITES, payload: res.data});
            } else {
              setError('Sorry, something went wrong while fetching Teams')
            }
          })
          .catch(err => {
            setError('Sorry, something went wrong while fetching Teams')
            setLoading(false);
          })
      }
    }, []);

    function fetchPlayers(link) {  
      link = link ?? pagination.first ?? SERVER_URL + `/players?_page=1`;

      return axios.get(link)
        .then(res => {
          if (res.status === 200) {
            handlePaginationLinks(res.headers.link)
            setPlayers(res.data);
          } else {
            setError('Sorry, something went wrong while fetching Players')
          }
        })
        .catch(err => {
          setError('Sorry, something went wrong while fetching Players')
        })
        .finally(() => setLoading(false));
    }


    function handlePaginationLinks(links) {
        links = parseHeaderLinks(links);
        const totalPages = links?.last?.split('=')?.[1].split("&")[0] ?? 1; // not reliable, used as a hack for time saving

        setPagination((prevPagination) => ({ 
            page: prevPagination.page,
            ...links,
            total: totalPages,
        }))
    }

    function handlePagination(direction) {
        switch (direction) {
            case 'next':
                setPagination({ ...pagination, page: pagination.page + 1 })
                break;
            case 'prev':
                setPagination({ ...pagination, page: pagination.page - 1 })
                break;
            case 'last':
                setPagination({ ...pagination, page: pagination.total })
                break;
            default:
                break;
        }

        const link = pagination[direction];
        fetchPlayers(link);
    }

    function searchPlayers(text) {
      let link = SERVER_URL + `/players?_page=1`;
      if (text) {        
        link += '&q=' + text;
      }

      fetchPlayers(link);
    }
    
    return (
        <>
            <Search onSearch={searchPlayers}/>
            {error && <Err>{error}</Err>}
            <CardsContainer >
                {loading && <Loading>Loading...</Loading>} 
                {players?.length > 0 && players.map(player => 
                    <Card key={player.id} data={player} />)
                }
            </CardsContainer>
            <Paginate>
                <PaginateBtn onClick={() => handlePagination('prev')} disable={!pagination.prev}>Prev</PaginateBtn>
                    <PageText> Page {pagination.page} of {pagination.total} </PageText>
                <PaginateBtn onClick={() => handlePagination('next')} disable={!pagination.next}>Next</PaginateBtn>
                <PaginateBtn onClick={() => handlePagination('last')} disable={!pagination.last}>Last</PaginateBtn>
            </Paginate>
        </>
    )
}
