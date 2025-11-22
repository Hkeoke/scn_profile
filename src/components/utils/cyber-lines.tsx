import * as motion from "motion/react-client";

const lines = [
  { x: 1253.6, width: 4.5 },
  { x: 873.3, width: 1.8 },
  { x: 1100, width: 1.8 },
  { x: 1547.1, width: 4.5 },
  { x: 615, width: 4.5 },
  { x: 684.6, width: 1.8 },
  { x: 1369.4, width: 1.8 },
];

const colors = ["#ff0", "#0ff", "#f0f", "#ff6600"];

const CyberLines = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="none"
      className="w-full h-full absolute top-0 left-0"
    >
      <g className="lines">
        {lines.map((line, index) => (
          <motion.rect
            key={index}
            x={line.x}
            width={line.width}
            height="1080"
            fill="white"
            opacity="0.2"
          />
        ))}

        {lines.map((line, index) => (
          <motion.rect
            key={`glow-${index}`}
            x={line.x}
            width={line.width}
            height="50"
            fill={colors[index % colors.length]}
            opacity="0.8"
            initial={{ y: -50 }}
            animate={{ y: [0, 1080] }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </g>
    </svg>
  );
};

export default CyberLines;
