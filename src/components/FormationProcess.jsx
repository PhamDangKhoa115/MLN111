import { motion } from "framer-motion";

const marxTimeline = [
  {
    title: "Điều kiện kinh tế - xã hội",
    time: "Những năm 40 thế kỷ XIX",
    icon: "🏭",
    text: "Chủ nghĩa tư bản Tây Âu phát triển mạnh do cách mạng công nghiệp. Sản xuất thủ công chuyển sang công nghiệp quy mô lớn, làm biến đổi sâu sắc đời sống kinh tế và xã hội.",
  },
  {
    title: "Mâu thuẫn giai cấp và yêu cầu lý luận",
    time: "Thế kỷ XIX",
    icon: "⚒️",
    text: "Giai cấp tư sản và vô sản hình thành. Mâu thuẫn giữa hai giai cấp ngày càng gay gắt, khiến giai cấp vô sản cần một hệ thống lý luận khoa học để định hướng phong trào cách mạng.",
  },
  {
    title: "Nguồn gốc lý luận",
    time: "Trước và trong thời Marx – Engels",
    icon: "📚",
    text: "Triết học Mác kế thừa kinh tế chính trị học cổ điển Anh, chủ nghĩa xã hội không tưởng Pháp và triết học cổ điển Đức, đặc biệt là phép biện chứng của Hegel và chủ nghĩa duy vật của Feuerbach.",
  },
  {
    title: "Tiền đề khoa học tự nhiên",
    time: "Thế kỷ XIX",
    icon: "🔬",
    text: "Học thuyết tiến hóa, học thuyết tế bào, định luật bảo toàn và chuyển hóa năng lượng, định luật bảo toàn vật chất và vận động góp phần chứng minh tính thống nhất vật chất của thế giới.",
  },
  {
    title: "Nhân tố chủ quan",
    time: "Marx và Engels",
    icon: "🤝",
    text: "Marx và Engels có tri thức sâu rộng, thấu hiểu đời sống khó khăn của giai cấp công nhân và tích cực tham gia phong trào đấu tranh thực tiễn.",
  },
  {
    title: "Giai đoạn 1841 – 1844",
    time: "Chuyển biến tư tưởng",
    icon: "🧠",
    text: "Marx và Engels chuyển từ lập trường duy tâm sang duy vật, từ tư tưởng dân chủ cách mạng sang chủ nghĩa cộng sản.",
  },
  {
    title: "Giai đoạn 1844 – 1848",
    time: "Hình thành nguyên lý cơ bản",
    icon: "📕",
    text: "Hai ông đề xuất những nguyên lý cơ bản của chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử.",
  },
  {
    title: "Giai đoạn 1848 – 1895",
    time: "Hoàn thiện hệ thống lý luận",
    icon: "🏛️",
    text: "Marx và Engels tiếp tục bổ sung, phát triển và hoàn thiện hệ thống lý luận triết học Mác.",
  },
  {
    title: "Triết học Mác dưới thời Lenin",
    time: "1893 – 1924 và sau đó",
    icon: "🚩",
    text: "Lenin bảo vệ và phát triển triết học Mác trong bối cảnh chủ nghĩa tư bản chuyển thành chủ nghĩa đế quốc, trung tâm cách mạng chuyển sang Nga và xuất hiện nhiều khủng hoảng thế giới quan mới.",
  },
];
export default function FormationProcess() {
  return (
    <section className="bg-yellow-50/70 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-700">
            Formation Process
          </p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Quá trình hình thành và phát triển
          </h2>
          <p className="mt-4 text-stone-600">
            Nội dung được trình bày theo dòng phát triển từ điều kiện ra đời của
            triết học Mác, các giai đoạn hình thành dưới thời Marx – Engels đến
            sự phát triển dưới thời Lenin.
          </p>
        </div>

        <div className="space-y-5">
          {marxTimeline.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="grid gap-5 rounded-3xl border border-yellow-100 bg-white p-6 shadow-sm md:grid-cols-[90px_1fr]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-3xl">
                {stage.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-yellow-600">
                  {stage.time}
                </p>
                <h3 className="mt-1 text-2xl font-bold">{stage.title}</h3>
                <p className="mt-2 max-w-3xl text-stone-600">{stage.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
