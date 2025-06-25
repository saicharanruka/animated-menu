import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";

import { slide } from "../anim";
import { motion } from "motion/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavLink = ({ data }: { data: any }) => {
	const { title, href, index } = data;

	return (
		<motion.div
			custom={index}
			className={styles.link}
			variants={slide}
			initial="initial"
			animate="enter"
			exit="exit"
		>
			{/* <div className={styles.indicator}></div> */}
			<Link href={href}>{title}</Link>
		</motion.div>
	);
};

export default NavLink;
