import React from "react";
import './Header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faWhatsapp, faFacebookMessenger} from "@fortawesome/free-brands-svg-icons";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";



interface HeaderState {
	isOpenedDropdown: boolean;
	scrollPosition: number;
}

class Header extends React.Component<any, HeaderState> {

	constructor(props: any) {
		super(props);
		this.state = {
			isOpenedDropdown: props.isOpenedDropdown,
			scrollPosition: 0
		};
		this.onDropdownBtnClick = this.onDropdownBtnClick.bind(this);
		this.onScroll = this.onScroll.bind(this);
	}

	public componentDidMount(): void {
		window.addEventListener('scroll', this.onScroll)
	}

	public componentWillUnmount(): void {
		window.removeEventListener('scroll', this.onScroll)
	}

	public onScroll(event: any): void {
		this.setState((state, props) => ({scrollPosition: window.scrollY}))
	}

	public onDropdownBtnClick(e: any): void {
		this.setState((state, props) => ({isOpenedDropdown: !state.isOpenedDropdown}))
	}

	public render() {
		return (
			<div className={'header ' + (this.state.scrollPosition > 50 ? 'pinned' : '') }>
				<div className="header__logo">
					<span className="header__text">
						Cream Paradise
					</span>
				</div>
				<div className="header__menu">
					<ul className="header__menu__container">
						<li className="header__menu__item">Portfolio</li>
						<li className="header__menu__item">We Are</li>
						<li className="header__menu__item">We Provide</li>
						<li className="header__menu__item">We Do</li>
						<li className="header__menu__item">Why Us</li>
						<li className="header__menu__item">Get in Touch</li>
					</ul>
				</div>
				<div className="header__social-networks">
					<ul className="header__social-networks__container">
						<li className="header__social-networks__item">
							<FontAwesomeIcon icon={faInstagram}/>
						</li>
						<li className="header__social-networks__item">
							<FontAwesomeIcon icon={faWhatsapp}/>
						</li>
						<li className="header__social-networks__item">
							<FontAwesomeIcon icon={faFacebookMessenger}/>
						</li>
					</ul>
				</div>
				<div className="header__dropdown-btn">
					<div className="btn-container" data-opened={this.state.isOpenedDropdown ? 'true' : 'false'} onClick={this.onDropdownBtnClick}>
						<FontAwesomeIcon color={'#b78b7c'} icon={this.state.isOpenedDropdown ? faTimes : faBars} />
					</div>
				</div>
				<div className="header__dropdown-list">
					<ul className={`header__dropdown-list__container ${this.state.isOpenedDropdown ? 'opened-dropdown' : ''}`}>
						<li className="header__dropdown-list__item">Portfolio</li>
						<li className="header__dropdown-list__item">We Are</li>
						<li className="header__dropdown-list__item">We Provide</li>
						<li className="header__dropdown-list__item">We Do</li>
						<li className="header__dropdown-list__item">Why Us</li>
						<li className="header__dropdown-list__item">Get in Touch</li>
					</ul>
				</div>
			</div>

		);
	}
}

export default Header;
