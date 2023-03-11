import React from "react";
import { BsSpotify } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import { motion } from "framer-motion";
const Streaming = () => {
	return (
		<motion.div
			initial={{ x: "-20vw", opacity: 0 }}
			animate={{
				x: 0,
				opacity: 1,
				transition: { type: "spring", stiffness: 40, damping: 10 },
			}}
			exit={{
				x: "-50vw",
				opacity: 0,
				transition: {
					type: "tween",
					ease: "easeInOut",
					duration: 0.8,
				},
			}}
			className="streaming
            h-full flex flex-row justify-around items-center
    		">
			<div className="w-full h-full flex flex-row items-center justify-center">
				<BsSpotify size="10em" color="white" />
			</div>
			<div className="w-full h-full flex flex-row items-center justify-center">
				<FaApple size="10em" color="white" />
			</div>
			<div className="w-full h-full flex flex-row items-center justify-center">
				<FaSoundcloud size="10em" color="white" />
			</div>
		</motion.div>
	);
};

export default Streaming;