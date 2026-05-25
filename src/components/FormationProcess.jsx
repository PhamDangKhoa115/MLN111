import { motion } from "framer-motion";
import { stages } from "../data/philosophyData";

export default function FormationProcess() {
  return (
    <section className="bg-yellow-50/70 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-700">
            Formation Process
          </p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Quá trình hình thành triết học
          </h2>
        </div>

        <div className="space-y-5">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="grid gap-5 rounded-3xl border border-yellow-100 bg-white p-6 shadow-sm md:grid-cols-[90px_1fr]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-3xl">
                {stage.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-yellow-600">
                  0{index + 1}
                </p>
                <h3 className="mt-1 text-2xl font-bold">{stage.title}</h3>
                <p className="mt-2 max-w-3xl text-stone-600">
                  {stage.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
