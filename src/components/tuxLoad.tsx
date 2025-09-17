import tux from "../assets/img/linux-svgrepo-com.svg";
import { motion } from "framer-motion";

function Tux() {
  return (
    <div className="w-full flex items-center justify-center h-screen">
      <motion.img
        src={tux}
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: [0, 1, 0.8, 1], scale: [0.3, 1, 0.8, 1] }} 
        transition={{
          duration: 2,   
          repeat: 3,     
          ease: "easeInOut"
        }}
        className="w-15"
      />
    </div>
  );
}

export default Tux;
