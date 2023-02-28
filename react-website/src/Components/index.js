import React from "react";
import { Nav, NavLink, NavMenu }
	from "../Components/NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/about" activeStyle>
			About
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Contact Us
		</NavLink>
		<NavLink to="/blogs" activeStyle>
			Blogs
		</NavLink>
		<NavLink to="/listing" activeStyle>
			Listing
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
