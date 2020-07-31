import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper, Addition, Button } from './style';

// HeaderWrapper 就是带样式的div标签
// 无状态组件性能更高, JXS的语法需要react去编译，就必须要import react 
const Header = (props) => {
	return ( 
	<HeaderWrapper>
		 <Logo />
		 <Nav>
		  <NavItem className="left active">
		   <span className="iconfont">&#xe65d;</span>
		   Homepage
		  </NavItem>
		  <NavItem className="left">
		   <span className="iconfont">&#xe623;</span>
		   Notifications
		  </NavItem>
		  <NavItem className="right">Login</NavItem>
		  <NavItem className="right">
		   <span className="iconfont">&#xe608;</span>
		   Answer
		  </NavItem>
      <SearchWrapper>
      <CSSTransition 
      in={props.focused} 
      timeout={200}
      classNames='slide'>
			   <NavSearch className={props.focused ? 'focused' : ''}
			   onFocus={props.handleInputFocus}
			   onBlur={props.handleInputBlur}></NavSearch>
		  </CSSTransition>
		  <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe62d;</span>
		  </SearchWrapper>
		  </Nav>
		 <Addition>
		  <Button className='add'>Add Questions</Button>
		  <Button className='reg'>Sign Up</Button>
		 </Addition>
		 </HeaderWrapper>
		 );
}

const mapStateToProps = (state) => {
  return {
     focused: state.header.focused 
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
    handleInputFocus() {
    	const action = {
    		type: 'search_focus'
    	};
    	dispatch(action);
    },
    handleInputBlur() {
    	const action = {
    		type: 'search_blur'
    	};
    	dispatch(action);
    }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);