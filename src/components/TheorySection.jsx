import { BookOpen, Brain, Compass } from "lucide-react";

export default function TheorySection() {
  const theoryCards = [
    [
      BookOpen,
      "Nguồn gốc nhận thức",
      "Con người cần lý giải tự nhiên, xã hội và vị trí của mình trong thế giới.",
    ],
    [
      Brain,
      "Tư duy lý tính",
      "Thay vì chỉ dựa vào niềm tin, con người bắt đầu dùng lý trí để tìm nguyên nhân.",
    ],
    [
      Compass,
      "Khát vọng chân lý",
      "Triết học hướng đến câu hỏi lớn: thế giới là gì, con người là ai, sống thế nào là đúng?",
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
            Giải thích lý thuyết
          </h2>
          <p className="mt-4 text-stone-600">
            Triết học không xuất hiện đột ngột. Nó hình thành khi con người
            chuyển từ cách giải thích thế giới bằng huyền thoại sang cách suy
            nghĩ có lý luận, có quan sát và có phản biện.
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
