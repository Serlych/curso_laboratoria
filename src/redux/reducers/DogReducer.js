const INITIAL_STATE = {
	dogs: []
};

const dogReducer = (prevState = INITIAL_STATE, action) => {
	switch(action.type) {
		case 'ADD_DOG':
			return {
				dogs: [...prevState.dogs,action.payload]
			}
		default:
			return prevState;
	}
}

export default dogReducer;