import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Leonardo Scremin Feijó | Engenheiro Front-end";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#0070f3",
              boxShadow: "0 0 12px #0070f3",
            }}
          />
          <span
            style={{ color: "#0070f3", fontSize: "18px", fontWeight: 600 }}
          >
            &gt;_ portfólio
          </span>
        </div>

        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#ededed",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Leonardo
          <span style={{ color: "#0070f3" }}>.</span>
        </div>

        <div
          style={{
            fontSize: "28px",
            color: "#888888",
            marginBottom: "48px",
            lineHeight: 1.4,
          }}
        >
          Engenheiro Front-end · Infraestrutura → Web
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          {["Next.js", "React", "TypeScript", "Docker"].map((tech) => (
            <div
              key={tech}
              style={{
                border: "1px solid #333333",
                borderRadius: "8px",
                padding: "6px 16px",
                color: "#888888",
                fontSize: "16px",
                backgroundColor: "#161616",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
