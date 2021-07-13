/* eslint-disable no-console */
import types from "./actions";

const initialState = {
	userData: {},
	testTxt: "",
	movieDetail: {},
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case types.SET_DATA:
			console.log(`${types.SET_DATA} => `);
			return {
				...state,
				userData: action.userData,
			};
		case types.SET_MOVIE_DETAIL:
			return {
				...state,
				movieDetail: action.movieDetail,
			};
		case types.LOGOUT:
			console.log(`${types.LOGOUT} => Logout called`);
			return {
				...state,
				userData: {},
			};
		default:
			return state;
	}
}
