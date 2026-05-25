export const stages = [
  {
    title: "Thần thoại & Tín ngưỡng",
    subtitle:
      "Con người giải thích thế giới bằng huyền thoại, thần linh và truyền thuyết.",
    icon: "☀️",
  },
  {
    title: "Quan sát Tự nhiên",
    subtitle:
      "Con người bắt đầu đặt câu hỏi về vũ trụ, sự sống, nước, lửa, đất, không khí.",
    icon: "🌿",
  },
  {
    title: "Tư duy Lý tính",
    subtitle:
      "Lý trí dần thay thế niềm tin mơ hồ. Con người tìm nguyên nhân bằng lập luận.",
    icon: "🧠",
  },
  {
    title: "Tranh luận & Đối thoại",
    subtitle:
      "Các nhà tư tưởng trao đổi, phản biện và hình thành trường phái tư tưởng.",
    icon: "💬",
  },
  {
    title: "Triết học Hình thành",
    subtitle:
      "Triết học ra đời như một cách lý giải thế giới bằng tư duy hệ thống.",
    icon: "🏛️",
  },
];

export const questions = [
  {
    prompt:
      "Khi gặp sấm sét, tư duy thần thoại thường giải thích bằng cách nào?",
    options: [
      "Do thần linh tạo ra",
      "Do điện tích trong mây",
      "Do phản biện xã hội",
    ],
    answer: 0,
    gain: "Niềm tin cổ xưa",
  },
  {
    prompt: "Điểm thay đổi quan trọng giúp triết học xuất hiện là gì?",
    options: [
      "Chỉ nghe truyền thuyết",
      "Biết đặt câu hỏi và quan sát",
      "Không cần lý luận",
    ],
    answer: 1,
    gain: "Câu hỏi triết học",
  },
  {
    prompt: "Tư duy lý tính khác tư duy thần thoại ở điểm nào?",
    options: [
      "Dựa vào lập luận",
      "Dựa hoàn toàn vào cảm xúc",
      "Không cần bằng chứng",
    ],
    answer: 0,
    gain: "Lý trí",
  },
  {
    prompt: "Đối thoại và tranh luận giúp triết học phát triển vì...",
    options: ["Làm rõ ý tưởng", "Làm mất thời gian", "Ngăn con người suy nghĩ"],
    answer: 0,
    gain: "Phản biện",
  },
];
