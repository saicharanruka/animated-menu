import React from "react";
import styles from "./style.module.scss";
import NavLink from "./NavLink/Link";
import { motion } from "motion/react";

import { menuSlide } from "./anim";
import Curve from "./Curve";

const navItems = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Work",
		href: "/work",
	},
	{
		title: "About",
		href: "/about",
	},
	{
		title: "Contact",
		href: "/contact",
	},
];

const Nav = () => {
	{
		console.log(Curve);
	}
	return (
		<motion.div
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
			className={styles.menu}
		>
			<div className={styles.body}>
				<div className={styles.nav}>
					<div className={styles.header}>
						<p>Navigation</p>
					</div>
					{navItems.map((item, index) => (
						<NavLink key={item.title} data={{ ...item, index }} />
					))}
				</div>
				<div className={styles.footer}>
					<a>Github</a>
					<a>LinkedIn</a>
					<a>Discord</a>
					<a>Upwork</a>
				</div>
			</div>

			<Curve />
		</motion.div>
	);
};

export default Nav;
