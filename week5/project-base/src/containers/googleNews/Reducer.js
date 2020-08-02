import { FETCH_GOOGLE_NEWS } from './Constant';

const initialState = {
	data: [],
};
export default googleNews = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_GOOGLE_NEWS:
			return {
				...state,
				data: action.data.articles,
			};
			break;
		default:
			return state;
	}
};
