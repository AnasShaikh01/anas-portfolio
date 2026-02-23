import { motion } from "framer-motion";
import "./Loader.css";

const Loader = () => {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.6, duration: 0.6 }}
    >
      {/* Name */}
      <motion.h1
        className="loader-name"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Anas Shaikh
      </motion.h1>

      {/* Line */}
      <motion.div
        className="loader-line"
        initial={{ width: 0 }}
        animate={{ width: 180 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />

      {/* Role */}
      <motion.p
        className="loader-role"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        Web Developer
      </motion.p>
    </motion.div>
  );
};

export default Loader;