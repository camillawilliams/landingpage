import React from "react";
import PropTypes from "prop-types";

export function Nav(props) {
	//     //    const{ brand, links } = props;

	return (
		<div className="navbar">
			<nav className="navbar navbar-light bg-light">
				<span className="navbar-text">{props.text}</span>
			</nav>
		</div>
	);
	// <div className="container-fluid">
	//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
	//         <a className="navbar-brand" href="#">{brand}

	//             <button className="navbar-toggler"
	//                  type="button" data-toggle="collapse"
	//                  data-target="#navbarNav"
	//                  aria-controls="navbarNav"
	//                  aria-expanded="false"
	//                  aria-label="Toggle navigation">
	//                 <span className="navbar-toggler-icon"></span>
	//             </button>
	//                         <div className="collapse navbar-collapse" id="navbarNav">
	//                             <ul className="ml-auto navbar-nav">
	//                            {/* {links.map((card, index) => (
	//                                 <li key={index} className="nav-item active">
	//                                         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
	//                                             </li> */}
	//                                                 <li className="nav-item">
	//                                             <a className="nav-link" href="#">Features</a>
	//                                         </li>
	//                                     <li className="nav-item">
	//                                 <a className="nav-link" href="#">Pricing</a>
	//                             </li>
	//                         <li className="nav-item">
	//                     <a className="nav-link disabled" href="#">Disabled</a>
	//                 </li>
	//             </ul>
	//         </nav>
	// </div>
	// }
}

Nav.propTypes = {
	text: PropTypes.string
};
