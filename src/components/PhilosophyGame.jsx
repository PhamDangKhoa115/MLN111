import { useEffect, useRef, useState } from "react";

const ERAS = [
  {
    badge: "Màn 1",
    name: "Thần thoại",
    year: "3000 TCN",
    goal: "Thu thập các mảnh nghi vấn để mở đường sang tư duy tự nhiên.",
    world: "Bộ lạc cổ đại",
    quote: "Khi chưa có lý trí, con người giải thích thế giới bằng thần linh.",
    reasonNext:
      "Khi con người không còn chỉ chấp nhận huyền thoại, họ bắt đầu quan sát tự nhiên và đặt câu hỏi. Đây là bước chuyển từ Mythos sang tư duy tìm nguyên nhân.",
    bg: ["#130f0a", "#4a2d12", "#19140d"],
    items: ["❓", "🌩️", "🔥", "🌙", "👁️", "🪨"],
  },
  {
    badge: "Màn 2",
    name: "Quan sát Tự nhiên",
    year: "600 TCN",
    goal: "Thu thập các yếu tố tự nhiên để tìm bản nguyên của thế giới.",
    world: "Bờ biển Hy Lạp",
    quote: "Triết học bắt đầu khi con người hỏi: mọi thứ bắt nguồn từ đâu?",
    reasonNext:
      "Từ việc quan sát nước, lửa, khí, đất và sự biến đổi của vũ trụ, con người dần nhận ra thế giới có thể được giải thích bằng quy luật thay vì thần thoại.",
    bg: ["#17324d", "#d6b36a", "#274c3b"],
    items: ["🌊", "🔥", "🌬️", "🌱", "☀️", "🪐"],
  },
  {
    badge: "Màn 3",
    name: "Lý tính",
    year: "450 TCN",
    goal: "Thu thập các biểu tượng lý trí để vượt qua niềm tin mơ hồ.",
    world: "Quảng trường Athens",
    quote: "Logos thay thế Mythos — lý trí thay thế huyền thoại.",
    reasonNext:
      "Khi lý trí phát triển, con người không chỉ quan sát mà còn biết lập luận, so sánh đúng sai và xây dựng khái niệm. Tư duy triết học trở nên rõ ràng hơn.",
    bg: ["#24212b", "#c4a86a", "#5b5140"],
    items: ["🧠", "📜", "⚖️", "🕯️", "🔎", "🧩"],
  },
  {
    badge: "Màn 4",
    name: "Đối thoại Socrates",
    year: "400 TCN",
    goal: "Thu thập các biểu tượng đối thoại để hình thành tư duy phản biện.",
    world: "Học viện cổ đại",
    quote: "Một cuộc đời không được suy xét thì không đáng sống.",
    reasonNext:
      "Đối thoại và phản biện giúp tư duy cá nhân trở thành hoạt động học thuật. Triết học không còn là suy nghĩ riêng lẻ mà trở thành quá trình tranh luận để tìm chân lý.",
    bg: ["#121826", "#8e7a52", "#2d3040"],
    items: ["💬", "👥", "❔", "🗣️", "📣", "🧑‍🏫"],
  },
  {
    badge: "Màn 5",
    name: "Triết học Hình thành",
    year: "300 TCN",
    goal: "Thu thập các biểu tượng tri thức để hoàn thành hành trình triết học.",
    world: "Đền tri thức",
    quote:
      "Triết học ra đời khi con người biết suy nghĩ về chính tư duy của mình.",
    reasonNext:
      "Khi tri thức được hệ thống hóa thành phạm trù, khái niệm và trường phái, triết học chính thức hình thành như nền tảng cho khoa học, đạo đức và chính trị.",
    bg: ["#fff3bd", "#d9b65f", "#6b4e16"],
    items: ["📚", "🏛️", "✨", "📖", "🌟", "🧭"],
  },
];

const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

const makeCollectibles = (eraIndex, canvas, amount) => {
  const W = canvas?.width || 900;
  const H = canvas?.height || 600;
  const icons = shuffle(ERAS[eraIndex].items).slice(0, amount);

  return icons.map((icon, index) => ({
    id: `${eraIndex}-${index}-${Date.now()}`,
    icon,
    x: randomBetween(W * 0.18, W * 0.82),
    y: randomBetween(H * 0.22, H * 0.78),
    taken: false,
  }));
};

function drawWorld(ctx, canvas, eraIndex, player, collectibles, sparks) {
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
    ctx.fillText(
      item.icon,
      item.x,
      item.y + Math.sin(Date.now() * 0.004 + item.x) * 6,
    );
    ctx.restore();
  });

  drawPlayer(ctx, player.x, player.y);

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

function drawPlayer(ctx, x, y) {
  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0.3)";
  ctx.beginPath();
  ctx.ellipse(x + 18, y + 48, 22, 8, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.font = "46px serif";
  ctx.fillText("🧙", x, y + 42);
  ctx.restore();
}

export default function PhilosophyGame() {
  const canvasRef = useRef(null);
  const playerRef = useRef({ x: 120, y: 260, speed: 4 });
  const keysRef = useRef({});
  const particlesRef = useRef([]);
  const collectiblesRef = useRef([]);
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
      );
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
              `[${era.year}] ${item.icon} Đã thu thập mảnh tri thức.`,
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

      drawWorld(
        ctx,
        canvas,
        eraIndex,
        playerRef.current,
        collectiblesRef.current,
        particlesRef.current,
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
                Mỗi màn sẽ có những vật phẩm tri thức. Hãy thu thập đủ để sang
                màn tiếp theo.
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
          <h1>Triết học đã hình thành</h1>
          <p>
            Bạn đã vượt qua các màn tư duy: thần thoại, quan sát tự nhiên, lý
            tính, đối thoại và hệ thống hóa tri thức.
          </p>
          <div className="ending-lesson">
            <strong>Bài học:</strong>
            <span>
              Triết học hình thành khi con người chủ động khám phá, đặt câu hỏi
              và di chuyển từ niềm tin sang lý trí.
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
            <div className="tut-avatar">🐱</div>
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
