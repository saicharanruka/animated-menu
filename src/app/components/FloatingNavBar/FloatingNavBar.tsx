"use client";

import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";

import Nav from "./nav/Nav";
import { AnimatePresence } from "motion/react";

const FloatingNavBar = () => {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		setIsActive(false);
	}, []);

	return (
		<>
			<div className={styles.main}>
				<div className={styles.header}>
					<div
						onClick={() => {
							setIsActive(!isActive);
						}}
						className={styles.button}
					>
						<div
							className={`${styles.burger} ${
								isActive ? styles.burgerActive : ""
							}`}
						></div>
					</div>
				</div>
			</div>
			<AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
		</>
	);
};

export default FloatingNavBar;
