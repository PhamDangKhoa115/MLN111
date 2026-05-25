import { motion } from "framer-motion";
import { stages } from "../data/philosophyData";

export default function ProgressPath({ current }) {
  return (
    <div className="relative mt-10 grid grid-cols-5 gap-3">
      <div className="absolute left-8 right-8 top-8 h-1 rounded-full bg-yellow-100" />
      <motion.div
        className="absolute left-8 top-8 h-1 rounded-full bg-yellow-400"
        initial={false}
        animate={{ width: `${Math.min(current, 4) * 23}%` }}
        transition={{ duration: 0.5 }}
      />

      {stages.map((stage, index) => (
        <div
          key={stage.title}
          className="relative z-10 flex flex-col items-center text-center"
        >
          <motion.div
            animate={{
              scale: current >= index ? 1.08 : 1,
              y: current === index ? -4 : 0,
            }}
            className={`flex h-16 w-16 items-center justify-center rounded-2xl border text-2xl shadow-sm ${
              current >= index
                ? "border-yellow-300 bg-yellow-100"
                : "border-stone-200 bg-white"
            }`}
          >
            {stage.icon}
          </motion.div>
          <p className="mt-3 text-xs font-semibold text-stone-800">
            {stage.title}
          </p>
        </div>
      ))}
    </div>
  );
}
