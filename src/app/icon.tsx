import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#07090e",
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M8.2 15.6 13.9 22.4"
            stroke="#EEF1F6"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M13.9 22.4 24.4 8.2"
            stroke="#7AA2FF"
            strokeWidth="2.25"
            strokeLinecap="round"
          />
          <circle cx="13.9" cy="22.4" r="2.15" fill="#C4A574" />
        </svg>
      </div>
    ),
    size,
  );
}
