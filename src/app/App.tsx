import { useState } from "react";
import { Check } from "lucide-react";
import profilePhoto from "@/imports/image-1.png";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !email || !agreed) return;

    const res = await fetch("https://mental-health-ai-survey-production.up.railway.app/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email })
    });

    if (res.ok) {
      setSubmitted(true);
    }
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-6"
      style={{
        background:
          "linear-gradient(145deg, #f0eefa 0%, #fae8f5 40%, #e8f0fa 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Card */}
      <div
        className="w-full max-w-md bg-white rounded-3xl overflow-hidden"
        style={{
          boxShadow:
            "0 2px 8px rgba(0,0,0,0.06), 0 16px 48px rgba(130,80,180,0.12)",
        }}
      >
        {/* Top image */}
        <div className="w-full h-44 overflow-hidden bg-pink-100">
          <img
            src="https://images.unsplash.com/photo-1730780883153-b3c046b001c1?w=600&h=350&fit=crop&auto=format"
            alt="Soft pink and blue abstract gradient"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-6 pt-5 pb-6">
          {submitted ? (
            <div className="flex flex-col items-center py-8 gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "#f0eefa" }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7c3aed"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2
                className="text-xl font-bold text-gray-900 text-center"
                style={{ letterSpacing: "-0.02em" }}
              >
                Thank you, {name}!
              </h2>
              <p className="text-sm text-gray-400 text-center leading-relaxed">
                We've recorded your interest in testing Mental Health AI. We'll
                reach out at <span className="text-gray-600">{email}</span> soon.
              </p>
            </div>
          ) : (
            <>
              {/* Heading */}
              <h1
                className="text-2xl font-bold text-gray-900 mb-1"
                style={{ letterSpacing: "-0.03em" }}
              >
                Mental Health AI
              </h1>
              <p className="text-sm text-gray-400 mb-5">
                Want to participate in testing?
              </p>

              {/* What to expect list */}
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-base"
                    style={{ background: "#f5f0ff" }}
                  >
                    🧠
                  </span>
                  <p className="text-sm text-gray-600 leading-snug pt-0.5">
                    Try our <span className="font-semibold text-gray-900">AI-powered</span> mental wellness companion
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-base"
                    style={{ background: "#f5f0ff" }}
                  >
                    💬
                  </span>
                  <p className="text-sm text-gray-600 leading-snug pt-0.5">
                    Share <span className="font-semibold text-gray-900">honest feedback</span> to shape the product
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-base"
                    style={{ background: "#f5f0ff" }}
                  >
                    🔒
                  </span>
                  <p className="text-sm text-gray-600 leading-snug pt-0.5">
                    Your data stays <span className="font-semibold text-gray-900">private and secure</span>, always
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 mb-5" />

              {/* Author */}
              <div className="flex items-center gap-3 mb-5">
                <img
                  src={profilePhoto}
                  alt="Hai Nam"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900 leading-none mb-0.5">
                    Hai Nam
                  </p>
                  <p className="text-xs text-gray-400">Creator · Mental Health AI</p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-500">
                    Your name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full rounded-xl px-4 py-2.5 text-sm text-gray-900 outline-none transition-all"
                    style={{
                      background: "#f7f7f9",
                      border: "1.5px solid #f0f0f4",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = "1.5px solid #c4b5fd";
                      e.currentTarget.style.background = "#fff";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = "1.5px solid #f0f0f4";
                      e.currentTarget.style.background = "#f7f7f9";
                    }}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-500">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-xl px-4 py-2.5 text-sm text-gray-900 outline-none transition-all"
                    style={{
                      background: "#f7f7f9",
                      border: "1.5px solid #f0f0f4",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = "1.5px solid #c4b5fd";
                      e.currentTarget.style.background = "#fff";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = "1.5px solid #f0f0f4";
                      e.currentTarget.style.background = "#f7f7f9";
                    }}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setAgreed(!agreed)}
                  className="flex items-start gap-3 text-left cursor-pointer group"
                >
                  <span
                    className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-md flex items-center justify-center transition-all"
                    style={{
                      background: agreed ? "#111" : "#f7f7f9",
                      border: agreed ? "1.5px solid #111" : "1.5px solid #e0e0e6",
                    }}
                  >
                    {agreed && <Check size={12} strokeWidth={3} className="text-white" />}
                  </span>
                  <span className="text-xs text-gray-500 leading-relaxed pt-0.5">
                    I agree to the storage of my data according to the{" "}
                    <a
                      href="#"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-900 underline underline-offset-2 hover:text-violet-600 transition-colors"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </button>

                <button
                  type="submit"
                  className="mt-1 w-full py-3 rounded-xl text-sm font-semibold text-white cursor-pointer transition-all"
                  style={{
                    background: "#111",
                    letterSpacing: "-0.01em",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#333")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#111")
                  }
                >
                  Join the beta
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
