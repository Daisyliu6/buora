import styled from 'styled-components';
import logoPic from '../statics/logo.png';

export const HeaderWrapper = styled.div`
	position: relative;
	height: 53px;
	background: #ffffff;
	border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
	href: '/'
})`
	height: 50px;
	width: 75px;
	display: block;
	margin-left: 20px;
	top: 0;
	left: 0;
	position: absolute;
	background: url(${logoPic});
	background-size: contain;
`;

export const Nav = styled.div`
	width: 900px;
	height: 100%;
	padding-right: 70px;
	box-sizing: border-box;
	margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 52px;
  padding: 0 14px;
  font-size: 17px;
  color: #666666;
  &.left {
  float: left;
  }
  &.right {
  float: right;
  }
  &.active {
  color: #B92B27;
  }
`;

export const SearchWrapper = styled.div`
	float: left;
	position: relative;
	.iconfont {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			color: #fff;
			background: #777;
		}
	}
`

export const NavSearch = styled.input.attrs({
	placeholder: 'Search'
})`
	width: 160px;
	padding: 0 30px 0 20px;
	box-size: border-box;
	margin-top: 9px;
	margin-left: 10px;
	height: 38px;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 15px;
	color: #666;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 280px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 280px;
	}
	&.slid-exit {
    transition: all .2s ease-in;
	}
	&.slide-exit-active {
		width: 160px;
	}
`;

export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`;

export const Button = styled.div`
 float: right;
 line-height: 38px;
 margin-top: 9px;
 margin-right: 20px;
 padding: 0 10px;
 border: 1px solid #ec6149;
 border-radius: 19px;
 font-size: 15px;
 &.reg {
 	color: #b92b27;
 }
 &.add {
 	color: #fff;
 	background: #b92b27;
 }
`