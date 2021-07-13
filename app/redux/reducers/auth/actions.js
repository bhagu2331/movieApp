const actions = {
	SET_DATA: "auth/SET_DATA",
	LOGOUT: "auth/LOGOUT",
	SET_TEST_TXT: "auth/SET_TEST_TXT",
	SET_MOVIE_DETAIL: "auth/SET_MOVIE_DETAIL",

	setTestTxt: (testTxt) => (dispatch) =>
		dispatch({
			type: actions.SET_TEST_TXT,
			testTxt,
		}),

	setMovieDetail: (movieDetail) => (dispatch) =>
		dispatch({
			type: actions.SET_MOVIE_DETAIL,
			movieDetail,
		}),

	setUserData: (data) => {
		let uData = {};
		if (data !== undefined && data !== null && Object.keys(data).length > 0) {
			uData = data;
		}

		return (dispatch) =>
			dispatch({
				type: actions.SET_DATA,
				userData: uData,
			});
	},

	logOut: () => (dispatch) =>
		dispatch({
			type: actions.LOGOUT,
		}),
};

export default actions;
