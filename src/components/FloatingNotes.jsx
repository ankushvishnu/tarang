import COLORS from '../constants/colors';

const NOTES = ["♩", "♪", "♫", "♬", "𝄞", "♭", "♮"];

export default function FloatingNotes() {
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100%", height: "100%",
      pointerEvents: "none",
      zIndex: 0,
      overflow: "hidden",
    }}>
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: `${(i * 6.2 + 3) % 100}%`,
            top:  `${(i * 13.7 + 10) % 100}%`,
            fontSize: `${12 + (i % 5) * 6}px`,
            color: COLORS.lavenderMid,
            opacity: 0.10 + (i % 4) * 0.04,
            animation: `floatNote ${8 + (i % 5) * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.7}s`,
            fontFamily: "serif",
            userSelect: "none",
          }}
        >
          {NOTES[i % NOTES.length]}
        </span>
      ))}
    </div>
  );
}
