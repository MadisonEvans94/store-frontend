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
            w-full py-6 px-auto flex flex-row justify-around items-center
    		">
			<motion.div
				initial={{ scale: 1 }}
				whileHover={{ scale: 1.1 }}
				className="
				h-full flex flex-row justify-center items-center">
				<a href="https://open.spotify.com/artist/3W9mqyUptTa6FdiwM9SH11">
					<BsSpotify size="6em" color="white" />
				</a>
			</motion.div>
			<motion.div
				initial={{ scale: 1 }}
				whileHover={{ scale: 1.1 }}
				className="
				h-full flex flex-row justify-center items-center">
				<a href="https://music.apple.com/us/artist/blue-cloud/1510449426">
					<FaApple size="6em" color="white" />
				</a>
			</motion.div>
			<motion.div
				initial={{ scale: 1 }}
				whileHover={{ scale: 1.1 }}
				className="
				h-full flex flex-row justify-center items-center">
				<a href="https://soundcloud.com/bluecloudmusic">
					<FaSoundcloud size="6em" color="white" />
				</a>
			</motion.div>
		</motion.div>
	);
};

export default Streaming;
