import React from "react";
import { motion, useTransform } from "framer-motion";

const ProjectCard = (props) => {
  const scaleFactor = useTransform(props.boi, props.range, [1, 1.5, 1.5, 1]);
  const zFactor = useTransform(props.boi, props.range, [1, 10, 10, 1]);
  const marginXFactor = useTransform(props.boi, props.range, [50, -10, -10, 50]);

  console.log(props.range);

  return (
    <motion.div
      className="thumbnail tn-unfocused"
      ref={props.ref}
      onClick={props.onClick}
      id={props.id}
      style={{
        backgroundImage: `url(http://localhost:3000/${props.thumbnail})`,
        scale: scaleFactor,
        zIndex: zFactor,
        marginLeft: marginXFactor,
        marginRight: marginXFactor,
      }}
    >
      <div className="item-gradient-lr"></div>
      <div className="item-gradient-rl"></div>
    </motion.div>
  );
};

export default ProjectCard;
