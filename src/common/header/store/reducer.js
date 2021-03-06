const defaultState = {
    focused: false
};

// reducer 导出一个纯函数
export default (state = defaultState, action) => {
	if (action.type === 'search_focus') {
    return {
    	focused: true
    }
	} 
	if (action.type === 'search_blur') {
		return {
    	focused: false
    }
	}
	return state;
}

