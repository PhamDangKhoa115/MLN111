import { useEffect, useRef, useState } from "react";

const ERAS = [
  {
    badge: "Giai đoạn 1",
    name: "Điều kiện kinh tế - xã hội",
    year: "1840s",
    goal: "Thu thập các yếu tố kinh tế và xã hội dẫn đến sự ra đời của triết học Mác.",
    world: "Châu Âu thời cách mạng công nghiệp",
    quote:
      "Sự phát triển của chủ nghĩa tư bản làm xuất hiện những mâu thuẫn giai cấp sâu sắc.",
    reasonNext:
      "Khi giai cấp vô sản trở thành lực lượng chính trị độc lập, họ cần một hệ thống lý luận khoa học để định hướng phong trào cách mạng. Điều này mở đường cho sự hình thành của triết học Mác.",
    bg: ["#1a120f", "#6e4b2b", "#24170f"],
    items: [
      { icon: "🏭", label: "Cách mạng công nghiệp" },
      { icon: "👷", label: "Giai cấp vô sản" },
      { icon: "💰", label: "Giai cấp tư sản" },
      { icon: "⚒️", label: "Đấu tranh giai cấp" },
      { icon: "📈", label: "Chủ nghĩa tư bản" },
      { icon: "🔥", label: "Mâu thuẫn xã hội" },
    ],
  },
  {
    badge: "Giai đoạn 2",
    name: "Nguồn gốc lý luận",
    year: "1840s",
    goal: "Thu thập các nguồn tư tưởng làm nền tảng cho triết học Mác.",
    world: "Không gian học thuật châu Âu",
    quote: "Triết học Mác kế thừa tinh hoa tư tưởng của nhân loại.",
    reasonNext:
      "Marx và Engels đã tiếp thu kinh tế chính trị học Anh, chủ nghĩa xã hội không tưởng Pháp và triết học cổ điển Đức để xây dựng nền tảng lý luận mới.",
    bg: ["#1b2230", "#c9a15b", "#2f3f52"],
    items: [
      { icon: "📚", label: "Kinh tế chính trị Anh" },
      { icon: "🧠", label: "Triết học Đức" },
      { icon: "📜", label: "Hegel" },
      { icon: "⚖️", label: "Feuerbach" },
      { icon: "🏛️", label: "CNXH không tưởng Pháp" },
      { icon: "✒️", label: "Tinh hoa tư tưởng nhân loại" },
    ],
  },
  {
    badge: "Giai đoạn 3",
    name: "Tiền đề khoa học tự nhiên",
    year: "1940s",
    goal: "Thu thập các thành tựu khoa học làm nền tảng cho thế giới quan duy vật.",
    world: "Phòng nghiên cứu khoa học",
    quote:
      "Các học thuyết khoa học chứng minh tính thống nhất vật chất của thế giới.",
    reasonNext:
      "Những thành tựu như học thuyết tiến hóa, học thuyết tế bào và định luật bảo toàn năng lượng đã củng cố cơ sở khoa học cho triết học Mác.",
    bg: ["#10202c", "#9ab7c9", "#243643"],
    items: [
      { icon: "🧬", label: "Học thuyết tiến hóa" },
      { icon: "🔬", label: "Học thuyết tế bào" },
      { icon: "⚡", label: "Bảo toàn năng lượng" },
      { icon: "🌍", label: "Thống nhất vật chất" },
      { icon: "🧪", label: "Khoa học tự nhiên" },
      { icon: "☄️", label: "Vật chất và vận động" },
    ],
  },
  {
    badge: "Giai đoạn 4",
    name: "Nhân tố chủ quan",
    year: "1841 - 1848",
    goal: "Thu thập các yếu tố về Marx và Engels trong quá trình xây dựng học thuyết.",
    world: "Phong trào công nhân châu Âu",
    quote:
      "Marx và Engels đã kết hợp lý luận với thực tiễn đấu tranh cách mạng.",
    reasonNext:
      "Từ việc tham gia phong trào công nhân, Marx và Engels dần xây dựng hệ thống lý luận giúp giai cấp công nhân nhận thức và cải tạo xã hội.",
    bg: ["#231824", "#8f6b76", "#352635"],
    items: [
      { icon: "🧔", label: "Karl Marx" },
      { icon: "🤝", label: "Friedrich Engels" },
      { icon: "🪧", label: "Phong trào công nhân" },
      { icon: "📖", label: "Tri thức sâu rộng" },
      { icon: "⚒️", label: "Thực tiễn đấu tranh" },
      { icon: "🧑‍🏫", label: "Lý luận cách mạng" },
    ],
  },
  {
    badge: "Giai đoạn 5",
    name: "Hình thành và phát triển",
    year: "1848 - 1895",
    goal: "Thu thập các giai đoạn phát triển của triết học Mác.",
    world: "Hệ thống lý luận Mác",
    quote:
      "Triết học Mác được hoàn thiện thông qua quá trình phát triển lý luận và thực tiễn.",
    reasonNext:
      "Từ 1841 đến 1895, Marx và Engels đã chuyển từ chủ nghĩa duy tâm sang duy vật và xây dựng hoàn chỉnh chủ nghĩa duy vật biện chứng cùng chủ nghĩa duy vật lịch sử.",
    bg: ["#1b1b1b", "#b88b4a", "#3a2a16"],
    items: [
      { icon: "🧠", label: "Duy tâm sang duy vật" },
      { icon: "🚩", label: "Dân chủ sang cộng sản" },
      { icon: "📕", label: "Duy vật biện chứng" },
      { icon: "📘", label: "Duy vật lịch sử" },
      { icon: "🕰️", label: "1841–1844" },
      { icon: "🏛️", label: "1848–1895" },
    ],
  },
  {
    badge: "Giai đoạn 6",
    name: "Triết học Mác dưới thời Lenin",
    year: "1893 - nay",
    goal: "Thu thập các yếu tố thể hiện sự phát triển của triết học Mác – Lênin.",
    world: "Nga và phong trào cách mạng thế giới",
    quote:
      "Lenin bảo vệ và phát triển triết học Mác trong thời đại chủ nghĩa đế quốc.",
    reasonNext:
      "Lenin đã phát triển triết học Mác thông qua việc giải thích mối quan hệ giữa vật chất và ý thức, đồng thời vận dụng lý luận vào cách mạng xã hội chủ nghĩa.",
    bg: ["#260d0d", "#b34f3f", "#401616"],
    items: [
      { icon: "⭐", label: "Chủ nghĩa đế quốc" },
      { icon: "📕", label: "Duy vật và kinh nghiệm phê phán" },
      { icon: "🚩", label: "Cách mạng Nga" },
      { icon: "⚙️", label: "Vật chất và ý thức" },
      { icon: "🧠", label: "Bảo vệ chủ nghĩa Mác" },
      { icon: "🌍", label: "Phong trào công nhân thế giới" },
    ],
  },
];

const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);
const isTooCloseToPlayer = (x, y, player, minDistance = 150) => {
  const dx = player.x + 20 - x;
  const dy = player.y + 30 - y;
  return Math.sqrt(dx * dx + dy * dy) < minDistance;
};

const getSafeRandomPosition = (W, H, player) => {
  let x;
  let y;
  let tries = 0;

  do {
    x = randomBetween(W * 0.18, W * 0.82);
    y = randomBetween(H * 0.22, H * 0.78);
    tries++;
  } while (isTooCloseToPlayer(x, y, player) && tries < 50);

  return { x, y };
};
const WRONG_ITEMS = [
  { icon: "😴", label: "Lười lắm hong học đâu" },
  { icon: "😨", label: "Sợ triết học lắm" },
  { icon: "🙈", label: "Thôi khỏi suy nghĩ" },
  { icon: "📵", label: "Bỏ qua lý luận" },
  { icon: "🫠", label: "Triết học khó quá" },
];
const makeCollectibles = (eraIndex, canvas, amount, player) => {
  const W = canvas?.width || 900;
  const H = canvas?.height || 600;
  const selectedItems = shuffle(ERAS[eraIndex].items).slice(0, amount);

  return selectedItems.map((item, index) => {
    const pos = getSafeRandomPosition(W, H, player);

    return {
      id: `correct-${eraIndex}-${index}-${Date.now()}`,
      icon: item.icon,
      label: item.label,
      x: pos.x,
      y: pos.y,
      taken: false,
      type: "correct",
    };
  });
};
const makeWrongItems = (canvas, player) => {
  const W = canvas?.width || 900;
  const H = canvas?.height || 600;
  const amount = randomBetween(2, 3);
  const selectedItems = shuffle(WRONG_ITEMS).slice(0, amount);

  return selectedItems.map((item, index) => {
    const pos = getSafeRandomPosition(W, H, player);

    return {
      id: `wrong-${index}-${Date.now()}`,
      icon: item.icon,
      label: item.label,
      x: pos.x,
      y: pos.y,
      type: "wrong",
    };
  });
};
function drawWorld(
  ctx,
  canvas,
  eraIndex,
  player,
  collectibles,
  wrongItems,
  sparks,
  moving,
  direction,
) {
  const W = canvas.width;
  const H = canvas.height;
  const era = ERAS[eraIndex];

  const sky = ctx.createLinearGradient(0, 0, 0, H);
  sky.addColorStop(0, era.bg[0]);
  sky.addColorStop(0.52, era.bg[1]);
  sky.addColorStop(1, era.bg[2]);
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, W, H);

  ctx.save();
  ctx.globalAlpha = eraIndex === 0 ? 0.35 : 0.65;
  ctx.fillStyle = eraIndex === 4 ? "#fff5b8" : "#ffd166";
  ctx.beginPath();
  ctx.arc(W * 0.78, H * 0.18, 48, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  ctx.fillStyle = "rgba(0,0,0,0.22)";
  ctx.beginPath();
  ctx.moveTo(0, H * 0.5);
  for (let x = 0; x <= W; x += 30) {
    const y = H * 0.47 + Math.sin(x * 0.016 + eraIndex) * 30;
    ctx.lineTo(x, y);
  }
  ctx.lineTo(W, H);
  ctx.lineTo(0, H);
  ctx.fill();

  ctx.fillStyle =
    eraIndex === 1 ? "rgba(34, 102, 140, 0.45)" : "rgba(0,0,0,0.18)";
  ctx.fillRect(0, H * 0.66, W, H * 0.34);

  const centerX = W * 0.48;
  const baseY = H * 0.58;

  if (eraIndex === 0) drawCamp(ctx, centerX, baseY);
  else if (eraIndex === 1) drawGreekCoast(ctx, centerX, baseY);
  else if (eraIndex === 2 || eraIndex === 3) drawAgora(ctx, centerX, baseY);
  else drawTemple(ctx, centerX, baseY);

  for (let i = 0; i < 7; i++) {
    const x = W * 0.18 + i * (W * 0.085) + Math.sin(Date.now() * 0.001 + i) * 8;
    const y = H * 0.72 + Math.sin(Date.now() * 0.0015 + i) * 6;
    drawCitizen(ctx, x, y, i, eraIndex);
  }

  collectibles.forEach((item) => {
    if (item.taken) return;
    ctx.save();
    ctx.shadowBlur = 18;
    ctx.shadowColor = "#ffd166";
    ctx.font = "42px serif";
    ctx.textAlign = "center";
    const floating = Math.sin(Date.now() * 0.004 + item.x) * 6;
    ctx.fillText(item.icon, item.x, item.y + floating);

    ctx.font = "bold 13px Inter";
    ctx.fillStyle = "#fff7d6";
    ctx.strokeStyle = "rgba(0,0,0,0.65)";
    ctx.lineWidth = 4;
    ctx.strokeText(item.label, item.x, item.y - 34 + floating);
    ctx.fillText(item.label, item.x, item.y - 34 + floating);
    ctx.restore();
  });
  wrongItems.forEach((item) => {
    const floating = Math.sin(Date.now() * 0.004 + item.x) * 6;

    ctx.save();

    ctx.shadowBlur = 16;
    ctx.shadowColor = "#ef476f";

    ctx.font = "42px serif";
    ctx.textAlign = "center";

    ctx.fillText(item.icon, item.x, item.y + floating);

    ctx.font = "bold 13px Inter";

    ctx.fillStyle = "#ffd6df";
    ctx.strokeStyle = "rgba(0,0,0,0.7)";
    ctx.lineWidth = 4;

    ctx.strokeText(item.label, item.x, item.y - 34 + floating);

    ctx.fillText(item.label, item.x, item.y - 34 + floating);

    ctx.restore();
  });
  drawPlayer(ctx, player.x, player.y, moving, direction);

  ctx.font = "42px serif";
  ctx.fillText("🐱", W * 0.88, H * 0.76);

  sparks.forEach((p) => {
    ctx.save();
    ctx.globalAlpha = p.life;
    ctx.fillStyle = p.color;
    ctx.font = "bold 20px Inter";
    ctx.textAlign = "center";
    ctx.fillText(p.text, p.x, p.y);
    ctx.restore();
  });
}

function drawCamp(ctx, x, y) {
  ctx.font = "52px serif";
  ctx.fillText("🔥", x - 20, y + 40);
  ctx.fillText("⛺", x - 150, y + 45);
  ctx.fillText("🌳", x + 120, y + 30);
  ctx.fillText("🌙", x + 230, y - 170);
}

function drawGreekCoast(ctx, x, y) {
  ctx.font = "54px serif";
  ctx.fillText("🌊", x - 180, y + 90);
  ctx.fillText("⛵", x - 60, y + 50);
  ctx.fillText("🏺", x + 100, y + 55);
  ctx.fillText("📜", x + 180, y + 15);
}

function drawAgora(ctx, x, y) {
  ctx.font = "58px serif";
  ctx.fillText("🏛️", x - 120, y + 40);
  ctx.fillText("📜", x + 80, y + 40);
  ctx.fillText("💬", x + 170, y - 10);
}

function drawTemple(ctx, x, y) {
  ctx.font = "70px serif";
  ctx.fillText("🏛️", x - 80, y + 35);
  ctx.fillText("📚", x + 110, y + 35);
  ctx.fillText("✨", x + 220, y - 30);
}

function drawCitizen(ctx, x, y, i, eraIndex) {
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.beginPath();
  ctx.ellipse(x + 20, y + 46, 20, 7, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.font = "42px serif";
  const people = eraIndex < 2 ? ["🧍", "🧎", "🚶"] : ["🧑‍🏫", "🧑‍🎓", "🧑‍⚖️"];
  ctx.fillText(people[i % people.length], x, y + 40);
}

function drawPlayer(ctx, x, y, moving, direction = "right") {
  const time = Date.now() * 0.012;

  const bob = moving ? Math.sin(time * 1.4) * 4 : Math.sin(time * 0.5) * 1.5;

  const legSwing = moving ? Math.sin(time * 1.8) * 8 : 0;

  const armSwing = moving ? Math.sin(time * 1.8) * 6 : 0;

  ctx.save();

  // Flip character
  if (direction === "left") {
    ctx.translate(x + 45, 0);
    ctx.scale(-1, 1);
    x = 0;
  }

  // Shadow
  ctx.fillStyle = "rgba(0,0,0,0.28)";
  ctx.beginPath();
  ctx.ellipse(x + 22, y + 56, 22, 7, 0, 0, Math.PI * 2);
  ctx.fill();

  // Cloak
  ctx.fillStyle = "#5b3b16";
  ctx.beginPath();
  ctx.roundRect(x + 8, y + 18 + bob, 28, 34, 12);
  ctx.fill();

  // Head
  ctx.fillStyle = "#f1c27d";
  ctx.beginPath();
  ctx.arc(x + 22, y + 11 + bob, 11, 0, Math.PI * 2);
  ctx.fill();

  // Hood
  ctx.fillStyle = "#2f1b0c";
  ctx.beginPath();
  ctx.arc(x + 22, y + 7 + bob, 13, Math.PI, Math.PI * 2);
  ctx.fill();

  // Left arm
  ctx.strokeStyle = "#2f1b0c";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";

  ctx.beginPath();
  ctx.moveTo(x + 12, y + 28 + bob);
  ctx.lineTo(x + 6 - armSwing, y + 42 + bob);
  ctx.stroke();

  // Right arm
  ctx.beginPath();
  ctx.moveTo(x + 33, y + 28 + bob);
  ctx.lineTo(x + 38 + armSwing, y + 42 + bob);
  ctx.stroke();

  // Left leg
  ctx.beginPath();
  ctx.moveTo(x + 16, y + 50 + bob);
  ctx.lineTo(x + 12 + legSwing, y + 66);
  ctx.stroke();

  // Right leg
  ctx.beginPath();
  ctx.moveTo(x + 28, y + 50 + bob);
  ctx.lineTo(x + 32 - legSwing, y + 66);
  ctx.stroke();

  // Staff
  ctx.strokeStyle = "#d6a84f";
  ctx.lineWidth = 3;

  ctx.beginPath();
  ctx.moveTo(x + 39, y + 16 + bob);
  ctx.lineTo(x + 44, y + 60);
  ctx.stroke();

  // Glow orb
  ctx.shadowBlur = 14;
  ctx.shadowColor = "#ffd166";
  ctx.fillStyle = "#ffd166";

  ctx.beginPath();
  ctx.arc(x + 39, y + 12 + bob, 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}
export default function PhilosophyGame() {
  const canvasRef = useRef(null);
  const playerRef = useRef({ x: 120, y: 260, speed: 4 });
  const keysRef = useRef({});
  const particlesRef = useRef([]);
  const collectiblesRef = useRef([]);
  const wrongItemsRef = useRef([]);
  const requiredCountRef = useRef(3);
  const levelCompleteRef = useRef(false);

  const [started, setStarted] = useState(false);
  const [eraIndex, setEraIndex] = useState(0);
  const [collected, setCollected] = useState(0);
  const [requiredCount, setRequiredCount] = useState(3);
  const [transitionModal, setTransitionModal] = useState(null);
  const [logs, setLogs] = useState(["🌍 Thế giới tư duy 2D đã sẵn sàng."]);
  const [tutorialOpen, setTutorialOpen] = useState(true);
  const [phaseBanner, setPhaseBanner] = useState(true);
  const [advisorVisible, setAdvisorVisible] = useState(true);
  const [ending, setEnding] = useState(false);
  const [badEnding, setBadEnding] = useState(false);

  const era = ERAS[eraIndex];

  useEffect(() => {
    const down = (event) => {
      keysRef.current[event.key.toLowerCase()] = true;
    };
    const up = (event) => {
      keysRef.current[event.key.toLowerCase()] = false;
    };

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);

    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  useEffect(() => {
    if (!started || ending) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let frame;

    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      playerRef.current.x = Math.min(playerRef.current.x, canvas.width - 60);
      playerRef.current.y = Math.min(playerRef.current.y, canvas.height - 80);
    };

    const setupLevel = () => {
      levelCompleteRef.current = false;
      const nextRequired = randomBetween(3, 5);
      requiredCountRef.current = nextRequired;
      setRequiredCount(nextRequired);
      setCollected(0);
      collectiblesRef.current = makeCollectibles(
        eraIndex,
        canvas,
        nextRequired,
        playerRef.current,
      );

      wrongItemsRef.current = makeWrongItems(canvas, playerRef.current);
    };

    const movePlayer = () => {
      const player = playerRef.current;
      const keys = keysRef.current;
      const left = keys.arrowleft || keys.a;
      const right = keys.arrowright || keys.d;
      const up = keys.arrowup || keys.w;
      const down = keys.arrowdown || keys.s;

      if (left) player.x -= player.speed;
      if (right) player.x += player.speed;
      if (up) player.y -= player.speed;
      if (down) player.y += player.speed;

      player.x = Math.max(15, Math.min(canvas.width - 55, player.x));
      player.y = Math.max(20, Math.min(canvas.height - 70, player.y));
    };

    const checkCollectibles = () => {
      const player = playerRef.current;
      let justCollected = false;
      const touchedWrongItem = wrongItemsRef.current.find((item) => {
        const dx = player.x + 20 - item.x;
        const dy = player.y + 30 - item.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        return dist < 46;
      });

      if (touchedWrongItem && !levelCompleteRef.current) {
        levelCompleteRef.current = true;
        setLogs((prev) =>
          [
            `[${era.year}] ${touchedWrongItem.icon} Chạm phải: ${touchedWrongItem.label}.`,
            ...prev,
          ].slice(0, 8),
        );
        setBadEnding(true);
        setEnding(true);
        return;
      }

      collectiblesRef.current = collectiblesRef.current.map((item) => {
        if (item.taken) return item;
        const dx = player.x + 20 - item.x;
        const dy = player.y + 30 - item.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 46) {
          justCollected = true;
          particlesRef.current.push({
            x: item.x,
            y: item.y,
            text: `+ ${item.icon}`,
            color: "#ffd166",
            life: 1,
          });
          setLogs((prev) =>
            [
              `[${era.year}] ${item.icon} Thu thập: ${item.label}.`,
              ...prev,
            ].slice(0, 8),
          );
          return { ...item, taken: true };
        }

        return item;
      });

      if (justCollected) {
        const count = collectiblesRef.current.filter(
          (item) => item.taken,
        ).length;
        setCollected(count);

        if (count >= requiredCountRef.current && !levelCompleteRef.current) {
          levelCompleteRef.current = true;
          setLogs((prev) =>
            [
              `[${era.year}] 🚪 Bạn đã thu thập đủ tri thức để mở màn tiếp theo.`,
              ...prev,
            ].slice(0, 8),
          );
          setTimeout(() => {
            setTransitionModal({
              currentEra: era.name,
              nextEra:
                eraIndex >= ERAS.length - 1
                  ? "Kết thúc"
                  : ERAS[eraIndex + 1].name,
              reason: era.reasonNext,
            });
          }, 700);
        }
      }
    };

    const loop = () => {
      movePlayer();
      checkCollectibles();

      particlesRef.current = particlesRef.current
        .map((p) => ({ ...p, y: p.y - 1.2, life: p.life - 0.012 }))
        .filter((p) => p.life > 0);

      const moving =
        keysRef.current.arrowleft ||
        keysRef.current.arrowright ||
        keysRef.current.arrowup ||
        keysRef.current.arrowdown ||
        keysRef.current.a ||
        keysRef.current.d ||
        keysRef.current.w ||
        keysRef.current.s;

      const direction =
        keysRef.current.arrowleft || keysRef.current.a ? "left" : "right";

      drawWorld(
        ctx,
        canvas,
        eraIndex,
        playerRef.current,
        collectiblesRef.current,
        wrongItemsRef.current,
        particlesRef.current,
        moving,
        direction,
      );
      frame = requestAnimationFrame(loop);
    };

    resize();
    setupLevel();
    window.addEventListener("resize", resize);
    loop();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [started, eraIndex, ending, era.year]);

  useEffect(() => {
    if (!started) return;
    setPhaseBanner(true);
    setAdvisorVisible(true);

    const bannerTimer = setTimeout(() => setPhaseBanner(false), 2600);
    const advisorTimer = setTimeout(() => setAdvisorVisible(false), 4000);

    return () => {
      clearTimeout(bannerTimer);
      clearTimeout(advisorTimer);
    };
  }, [eraIndex, started]);

  const restart = () => {
    playerRef.current = { x: 120, y: 260, speed: 4 };
    setEraIndex(0);
    setCollected(0);
    setRequiredCount(3);
    requiredCountRef.current = 3;
    levelCompleteRef.current = false;
    setTransitionModal(null);
    setLogs(["🌍 Thế giới tư duy 2D đã sẵn sàng."]);
    setTutorialOpen(true);
    setEnding(false);
    setStarted(false);
  };

  const holdDirection = (key, value) => {
    keysRef.current[key] = value;
  };

  if (!started) {
    return (
      <main className="game-root flex items-center justify-center">
        <div className="intro-bg" />
        <section className="intro-content">
          <div className="intro-badge">Philosophy Platformer / Chương 1</div>
          <h1 className="intro-title">
            THE BIRTH
            <br />
            <span>OF PHILOSOPHY</span>
          </h1>
          <p className="intro-lead">
            Điều khiển nhân vật bằng phím mũi tên hoặc WASD. Thu thập các mảnh
            tri thức để vượt qua từng màn và mở khóa quá trình hình thành triết
            học.
          </p>

          <div className="intro-cards">
            <div className="intro-card">
              <h3>🎮 Điều khiển</h3>
              <p>
                Dùng ↑ ↓ ← → hoặc W A S D để di chuyển nhân vật trong thế giới
                2D.
              </p>
            </div>
            <div className="intro-card">
              <h3>✨ Nhiệm vụ</h3>
              <p>
                Mỗi màn có những vật phẩm tri thức. Thu thập đủ để sang màn tiếp
                theo.
              </p>
            </div>
            <div className="intro-card">
              <h3>🏛️ Mục tiêu</h3>
              <p>
                Đi từ thần thoại, quan sát tự nhiên, lý tính, đối thoại đến
                triết học.
              </p>
            </div>
          </div>

          <p className="intro-quote">
            <em>
              “Triết học bắt đầu khi con người không chỉ tin, mà còn biết đặt
              câu hỏi.”
            </em>
          </p>

          <div className="intro-btns">
            <button
              className="btn btn-primary"
              onClick={() => setStarted(true)}
            >
              ▶ Bắt đầu Game
            </button>
            <a href="/" className="btn btn-secondary">
              ← Về trang chính
            </a>
          </div>
        </section>
      </main>
    );
  }

  if (ending) {
    return (
      <main className="screen-ending">
        <div className="ending-box">
          <div className="big-emoji">🏛️</div>
          <h1>
            {badEnding ? "Hành trình tạm dừng" : "Triết học đã hình thành"}
          </h1>
          <p>
            {badEnding
              ? "Sao bạn lại bỏ cuộc sớm vạyy"
              : " Bạn đã vượt qua các màn tư duy: thần thoại, quan sát tự nhiên, lý tính, đối thoại và hệ thống hóa tri thức."}
          </p>
          <div className="ending-lesson">
            <strong>{badEnding ? "Karl Marx:" : "Bài học:"}</strong>
            <span>
              {badEnding
                ? "Đối với khoa học, không có con đường nào bằng phẳng... chỉ có những người không sợ chồn chân mỏi gối mới có hy vọng đạt tới đỉnh cao."
                : "Triết học Mác – Lênin hình thành khi lý luận khoa học gắn liền với thực tiễn lịch sử và phong trào cách mạng."}
            </span>
          </div>
          <div className="ending-btns">
            <button onClick={restart} className="btn btn-primary">
              Chơi lại
            </button>
            <a href="/" className="btn btn-secondary">
              Về trang chính
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="game-root">
      {phaseBanner && (
        <div className="phase-banner">
          <div className="pb-icon">
            {eraIndex === 0
              ? "🔥"
              : eraIndex === 1
                ? "🌊"
                : eraIndex === 2
                  ? "🧠"
                  : eraIndex === 3
                    ? "💬"
                    : "🏛️"}
          </div>
          <div className="pb-right">
            <h3>
              {era.badge}: {era.name}
            </h3>
            <p>{era.quote}</p>
            <div className="pb-mechanics">
              Thu thập đủ {requiredCount} mảnh tri thức để vượt màn
            </div>
          </div>
        </div>
      )}

      <header className="hud">
        <div className="hud-left">
          <div className="phase-container">
            <span className="phase-badge">{era.badge}</span>
            <h2 className="phase-name">{era.name}</h2>
          </div>
        </div>

        <div className="hud-center">
          <div className="dash-center">
            <div className="obj-tracker">
              <span className="obj-label">Nhiệm vụ</span>
              <span className="obj-text">{era.goal}</span>
              <div className="obj-progress-bg">
                <div
                  className="obj-progress-fill"
                  style={{ width: `${(collected / requiredCount) * 100}%` }}
                />
              </div>
            </div>
            <div className="main-stats">
              <div className="stat-box">
                <span className="label">⏳ Năm</span>
                <span className="value">{era.year}</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-box">
                <span className="label">✨ Đã nhặt</span>
                <span className="value">
                  {collected}/{requiredCount}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="hud-right">
          <button
            className="btn-icon-only"
            onClick={() => setTutorialOpen(true)}
          >
            ?
          </button>
          <button className="btn-icon-only" onClick={restart}>
            ☰
          </button>
        </div>
      </header>

      <div className="game-layout">
        <aside className="sidebar sidebar-left">
          <div className="panel-header">🧭 CÁC MÀN</div>
          <div className="timeline-list">
            {ERAS.map((item, index) => (
              <div
                key={item.name}
                className={`timeline-item ${index === eraIndex ? "active" : ""} ${index < eraIndex ? "done" : ""}`}
              >
                <span>{item.badge}</span>
                <strong>{item.name}</strong>
              </div>
            ))}
          </div>

          <div className="theory-spotlight story-spotlight">
            <div className="spotlight-title">🔥 Tư tưởng chính</div>
            <div id="fact-text">{era.quote}</div>
          </div>
        </aside>

        <main className="world-container">
          <canvas ref={canvasRef} id="gameCanvas" />
          {advisorVisible && (
            <div className="advisor-box">
              <div className="advisor-avatar">🐱</div>
              <div className="advisor-content">
                <div className="advisor-title">Cố vấn Triết học</div>
                <p>
                  Dùng phím mũi tên hoặc WASD để di chuyển. Mỗi màn sẽ yêu cầu
                  số lượng vật phẩm ngẫu nhiên.
                </p>
              </div>
            </div>
          )}

          <div className="mobile-controls">
            <button
              onPointerDown={() => holdDirection("arrowup", true)}
              onPointerUp={() => holdDirection("arrowup", false)}
            >
              ↑
            </button>
            <div>
              <button
                onPointerDown={() => holdDirection("arrowleft", true)}
                onPointerUp={() => holdDirection("arrowleft", false)}
              >
                ←
              </button>
              <button
                onPointerDown={() => holdDirection("arrowdown", true)}
                onPointerUp={() => holdDirection("arrowdown", false)}
              >
                ↓
              </button>
              <button
                onPointerDown={() => holdDirection("arrowright", true)}
                onPointerUp={() => holdDirection("arrowright", false)}
              >
                →
              </button>
            </div>
          </div>
        </main>

        <aside className="sidebar sidebar-right">
          <div className="panel-header">🎮 ĐIỀU KHIỂN</div>

          <div className="control-guide">
            <div className="key-row">
              <span>↑</span>
              <span>Đi lên</span>
            </div>
            <div className="key-row">
              <span>↓</span>
              <span>Đi xuống</span>
            </div>
            <div className="key-row">
              <span>←</span>
              <span>Đi trái</span>
            </div>
            <div className="key-row">
              <span>→</span>
              <span>Đi phải</span>
            </div>
            <div className="key-row">
              <span>WASD</span>
              <span>Cũng dùng được</span>
            </div>
          </div>

          <div className="panel-header" style={{ marginTop: "1rem" }}>
            📜 Biên niên sử
          </div>
          <div className="event-log">
            {logs.map((log, index) => (
              <div key={index} className="log-item good">
                {log}
              </div>
            ))}
          </div>
        </aside>
      </div>

      {tutorialOpen && (
        <div className="tutorial-overlay">
          <div className="tutorial-box">
            <div className="tut-avatar">🦉</div>
            <div className="tut-content">
              <h3>Hướng dẫn</h3>
              <p>
                Dùng phím ↑ ↓ ← → hoặc W A S D để điều khiển nhân vật. Vật phẩm
                tri thức sẽ xuất hiện ngẫu nhiên. Mỗi màn yêu cầu số lượng cần
                nhặt khác nhau, thu thập đủ sẽ mở màn giải thích trước khi
                chuyển màn.
              </p>
              <div className="tut-btns">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => setTutorialOpen(false)}
                >
                  Đã hiểu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {transitionModal && (
        <div className="level-transition-overlay">
          <div className="level-transition-box">
            <div className="big-emoji">🚪</div>
            <p className="level-label">Chuyển màn</p>
            <h2>
              {transitionModal.currentEra} → {transitionModal.nextEra}
            </h2>
            <p>{transitionModal.reason}</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setTransitionModal(null);
                if (eraIndex >= ERAS.length - 1) {
                  setEnding(true);
                } else {
                  playerRef.current = { x: 120, y: 260, speed: 4 };
                  setEraIndex((prev) => prev + 1);
                }
              }}
            >
              Tiếp tục
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
