import {
  BookOpen,
  Brain,
  Compass,
  Factory,
  Microscope,
  Users,
} from "lucide-react";

export default function TheorySection() {
  const theoryCards = [
    [
      Factory,
      "Điều kiện kinh tế - xã hội",
      "Những năm 40 của thế kỷ XIX, chủ nghĩa tư bản Tây Âu phát triển mạnh dưới tác động của cách mạng công nghiệp. Sự xuất hiện của giai cấp tư sản và vô sản làm mâu thuẫn giai cấp ngày càng gay gắt.",
    ],
    [
      BookOpen,
      "Nguồn gốc lý luận",
      "Triết học Mác kế thừa kinh tế chính trị học cổ điển Anh, chủ nghĩa xã hội không tưởng Pháp và triết học cổ điển Đức, đặc biệt là Hegel và Feuerbach.",
    ],
    [
      Microscope,
      "Tiền đề khoa học tự nhiên",
      "Học thuyết tiến hóa, học thuyết tế bào, định luật bảo toàn và chuyển hóa năng lượng chứng minh tính thống nhất vật chất của thế giới.",
    ],
    [
      Users,
      "Nhân tố chủ quan",
      "Marx và Engels có tri thức sâu rộng, gắn bó với phong trào công nhân và xây dựng lý luận nhằm giúp giai cấp công nhân nhận thức, cải tạo xã hội.",
    ],
    [
      Brain,
      "Các giai đoạn hình thành",
      "Từ 1841 đến 1895, Marx và Engels chuyển từ duy tâm sang duy vật, từ dân chủ cách mạng sang chủ nghĩa cộng sản và hoàn thiện hệ thống triết học Mác.",
    ],
    [
      Compass,
      "Sự phát triển dưới thời Lenin",
      "Lenin bảo vệ, phát triển triết học Mác trong bối cảnh chủ nghĩa tư bản chuyển sang chủ nghĩa đế quốc và cách mạng thế giới chuyển trọng tâm sang Nga.",
    ],
  ];

  return (
    <section id="theory" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-600">
            Theory
          </p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Cơ sở ra đời của Triết học Mác – Lênin
          </h2>
          <p className="mt-4 text-stone-600">
            Triết học Mác không xuất hiện ngẫu nhiên, mà ra đời từ những điều
            kiện lịch sử cụ thể: sự phát triển của chủ nghĩa tư bản, phong trào
            đấu tranh của giai cấp vô sản, các nguồn tư tưởng tiến bộ và thành
            tựu khoa học tự nhiên thế kỷ XIX.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {theoryCards.map(([Icon, title, desc]) => (
            <div
              key={title}
              className="rounded-3xl border border-stone-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-stone-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
