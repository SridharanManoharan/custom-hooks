import React, {useReducer, useEffect} from 'react'
import Card from '../card/card.component'

const INITIAL_STATE = {
    user : null,
    searchQuery : 'Bret'
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {...state, user: action.payload};
        case 'SET_SEARCH_QUERY':
            return {...state, searchQuery: action.payload};
        default:
            return state;
    }
}

const setUser = user => ({
    type: 'SET_USER',
    payload: user
})

const setSearchQuery = queryString => ({
    type: 'SET_SEARCH_QUERY',
    payload: queryString
})

const UserReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    const {user, searchQuery} = state;

    useEffect(() => {
        if(searchQuery.length > 0){
            const fetchFunc = async() => {
                const response = await fetch(`http://jsonplaceholder.typicode.com/users?username=${searchQuery}`);
                const resJson = await response.json()
                dispatch(setUser(resJson[0]));
            }
            fetchFunc();
        }
    }, [searchQuery]);

    return(
        <Card>
            <input
                type='search'
                value={searchQuery}
                onChange={event => dispatch(setSearchQuery(event.target.value))}
            />
            {user ? (
                <div>
                    <h3>{user.username}</h3>
                    <p>{user.name}</p>
                </div>
            ) : (
                <p>User not found</p>
            )}
        </Card>
    )
}

export default UserReducerExample