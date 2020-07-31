import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../common/header/store';

// 一个reducer太大，存放过多数据，可能造成代码的不可维护；
// 把一个reducer拆分成很多个reducer；
// 此处把header的相关信息放在了header的reducer里，再去整合成一个大的reducer

const reducer = combineReducers({
	header: headerReducer
});

export default reducer;

