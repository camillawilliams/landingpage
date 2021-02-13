import React from "react";
import { Nav } from "./nav.js";
import { Jumbo } from "./jumbo.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

export function Home() {
	return (
		<div>
			<Nav />
			<div className="container">
				<Jumbo />
				<div className="row">
					<Card
						title="This is a Card Test!"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
                        culpa natus architecto."
						footer="Find out more!"
					/>
					<Card
						title="This is a Card Test!"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
                        culpa natus architecto."
						footer="Find out more!"
					/>
					<Card
						title="This is a Card Test!"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
                        culpa natus architecto."
						footer="Find out more!"
					/>
					<Card
						title="This is a Card Test!"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
                        culpa natus architecto."
						footer="Find out more!"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
