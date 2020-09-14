import React, {ReactNode} from "react";
import './MainLayout.css';
import {Cake} from "../../models/Cake";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faBirthdayCake,
	faDollarSign,
	faMale,
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

class MainLayout extends React.Component<{ cakes: Cake[] }> {

	constructor(props: any) {
		super(props);
	}

	public render(): ReactNode {
		return (
			<div className="main-layout">

				<div className="main-layout__portfolio" id="portfolio">
					<h1 className="main-layout__portfolio_title">Portfolio</h1>
					<div className="main-layout__portfolio__container">
						{
							this.props.cakes.map(item => {
								return (
									<Link className="main-layout__portfolio__item" to='/item' key={item.id}>
										<div className="main-layout__portfolio__item__image">
											<img src={item.imageSrc} alt=""/>
										</div>
										<div className="main-layout__portfolio__item__text item-info">
											<div className="main-layout__portfolio__item__title">
												<p>{item.title}</p>
											</div>
											<div className="main-layout__portfolio__item__props">
												<div className="main-layout__portfolio__item__prop">
													<FontAwesomeIcon icon={faDollarSign}/>
													<span>{item.price}</span>
												</div>
												<div className="main-layout__portfolio__item__prop">
													<FontAwesomeIcon icon={faBirthdayCake}/>
													<span>{item.numberOfPieces}</span>
												</div>
												<div className="main-layout__portfolio__item__prop">
													<FontAwesomeIcon icon={faMale}/>
													<span>{item.amountOfPeople}</span>
												</div>
											</div>
										</div>

									</Link>
								);
							})
						}
					</div>

					{/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 121">*/}
					{/*	<path fill="#fff" d="M 0 121 C 77 0 220 99 374 44 C 583 0 979 22 1024 121 ">*/}
					{/*	</path>*/}
					{/*</svg>*/}
				</div>

				<div className="main-layout__divider" id="we-are"></div>

				<div className="main-layout__we-are" >

					<h1 className="main-layout__we-are_title">We are</h1>
					<div className="main-layout__we-are__container">
						<div className="main-layout__we-are__text">
							<p>You want to know us closer and we are highly welcome for that. We are a small family
								startup that only begins own journey in confectionary business.
								When I saying we - I mean several people:

								Me - I'm the maker of all cakes that you see;
								My husband - he does the technical support (website) and doing the deliveries;
								My daughters - 2.5 and 5.5 years old kids, they are the best critics of any happy
								birthday cake I made.</p>
						</div>
						<div className="main-layout__we-are__image">
							<img src="https://thumb.tildacdn.com/tild3639-3966-4565-b536-323061336631/-/resize/673x/-/format/webp/family_photo.png" alt=""/>
						</div>
					</div>
				</div>

				<div className="main-layout__divider" id="we-provide"></div>

				<div className="main-layout__we-provide">
					<h1 className="main-layout__we-provide_title">We provide</h1>
					<div className="main-layout__we-provide__container">
						<div className="main-layout__we-are__text">
							<p>Me - I'm the maker of all cakes that you see;
								My husband - he does the technical support (website) and doing the deliveries;
								My daughters - 2.5 and 5.5 years old kids, they are the best critics of any happy
								birthday cake I made.</p>
						</div>

					</div>
				</div>

				<div className="main-layout__divider" id="we-do"></div>

				<div className="main-layout__we-do">

				</div>

				<div className="main-layout__why-us">

				</div>

				<div className="main-layout__get-in-touch">

				</div>
			</div>
		);
	}
}

export default MainLayout;
