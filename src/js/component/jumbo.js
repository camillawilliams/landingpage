import React from "react";
import PropTypes from "prop-types";

export function Jumbo() {
	return (
		<div className="jumbo">
			<h1 className="display-4">Hello, world!</h1>
			<p className="lead">
				<b>
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</b>
			</p>

			<p>
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p>

			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</p>
		</div>
	);
}

{
	/* 
Jumbo.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	buttonText: PropTypes.string,
	url: PropTypes.string
}; */
}
