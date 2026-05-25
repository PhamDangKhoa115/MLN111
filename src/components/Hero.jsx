import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute right-[-12rem] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-yellow-200/50 blur-3xl" />
      <div className="absolute bottom-[-10rem] left-[-10rem] h-[26rem] w-[26rem] rounded-full bg-yellow-100 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-700">
            <Sparkles className="mr-2 h-4 w-4" /> Website học thuật tương tác
          </div>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Sự ra đời và phát triển của{" "}
            <span className="text-yellow-500">Triết học Mác – Lênin</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Tìm hiểu điều kiện lịch sử, nguồn gốc lý luận, tiền đề khoa học tự
            nhiên, nhân tố chủ quan và các giai đoạn phát triển của triết học
            Mác dưới thời Marx, Engels và Lenin.
          </p>

          <blockquote className="mt-8 rounded-3xl border-l-4 border-yellow-400 bg-stone-50 p-6 text-xl font-medium italic text-stone-700">
            “Triết học Mác ra đời từ sự kết hợp giữa thực tiễn đấu tranh xã hội,
            thành tựu khoa học và tinh hoa tư tưởng nhân loại.”
          </blockquote>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#theory"
              className="rounded-2xl bg-stone-950 px-6 py-3 font-semibold text-white shadow-lg hover:bg-stone-800"
            >
              Khám phá lý thuyết
            </a>
            <a
              href="/game"
              className="rounded-2xl border border-yellow-300 bg-yellow-50 px-6 py-3 font-semibold text-stone-950 hover:bg-yellow-100"
            >
              Bắt đầu Game
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="rounded-[2rem] border border-yellow-200 bg-gradient-to-br from-yellow-50 to-white p-8 shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
              {[
                ["1840s", "Điều kiện lịch sử", "🏭"],
                ["Marx & Engels", "Hình thành học thuyết", "📕"],
                ["Khoa học", "Tiền đề tự nhiên", "🔬"],
                ["Lenin", "Phát triển lý luận", "🚩"],
              ].map(([label, title, icon], i) => (
                <div
                  key={title}
                  className={`rounded-3xl p-6 shadow-sm ${i === 1 ? "bg-stone-950 text-white" : "bg-white"}`}
                >
                  <p className="text-3xl">{icon}</p>
                  <p className="mt-5 text-lg font-bold">{label}</p>
                  <p
                    className={`mt-2 text-sm ${i === 1 ? "text-stone-300" : "text-stone-500"}`}
                  >
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
