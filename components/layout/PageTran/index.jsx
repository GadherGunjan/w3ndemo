import { motion } from "framer-motion";
import { slide, opacity, perspective, test } from "./anim";
import LoadingCompo from "../LoadingCompo";

const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};


function hasFalseValues(arr) {
    return arr.some(value => !value);
}

const Layout = ({ children }) => {


  if(hasFalseValues(children)){
    return <LoadingCompo />
  } else {
      return (
        <div className="inner">
          <motion.div className="slide" {...anim(slide)}></motion.div>
          <motion.div className="page" {...anim(perspective)}>
            <motion.div {...anim(opacity)}>{children}</motion.div>
          </motion.div>
        </div>
      );
  }
};
export default Layout;