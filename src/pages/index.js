import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showSocials, setShowSocials] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // detect screen width for responsiveness
  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work With Me", href: "#work" },
  ];

  return (
    <div>
      {/* ✅ NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#fff",
          borderBottom: "1px solid #eee",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 10%",
          zIndex: 1000,
          boxSizing: "border-box",
          marginBottom:"100px"
        }}
      >
         <div
  style={{
    fontWeight: "700",
    fontSize: "20px",
    color: "#000",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  }}
  onClick={() => (window.location.href = "#home")}
>
  <img
    src="/images/positivity.png"
    alt="Logo"
    style={{
      width: "50px",        // adjust as needed
      height: "50px",       // keep square for even scaling
      objectFit: "contain", // prevents stretching
      borderRadius: "50%",  // optional: makes it a perfect circle
      marginRight: "8px",   // space between image and text if you add text
    }}
  />
</div>

        {!isMobile ? (
          <div style={{ display: "flex", gap: "24px" }}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: "500",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#2b4eff")}
                onMouseLeave={(e) => (e.target.style.color = "#333")}
              >
                {item.label}
              </a>
            ))}
          </div>
        ) : (
          <>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                fontSize: "22px",
                cursor: "pointer",
              }}
            >
            <img src="/images/folder.png" style={{width:"35px"}}/> 
            </button>

            {menuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "60px",
                  right: "10%",
                  backgroundColor: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  padding: "12px 16px",
                }}
              >
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    style={{
                      textDecoration: "none",
                      color: "#333",
                      fontWeight: "500",
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </>
        )}
      </nav>

      {/* ✅ HERO SECTION */}
     <section
  id="home"
  style={{
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "center",
    alignItems: "center",
    // minHeight: "100vh",

    padding: isMobile ? "80px 20px 40px" : "100px 8%",
    backgroundColor: "#fff",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
    gap: isMobile ? "40px" : "60px", // brings text & image closer
  }}
>
  {/* LEFT TEXT SECTION */}
  <div
    style={{
      maxWidth: isMobile ? "100%" : "520px",
      textAlign: isMobile ? "center" : "left",
      zIndex: 10,
      marginRight: isMobile ? 0 : "-20px", // pull text slightly closer to images
    }}
  >
<div
  style={{
    display: "inline-block",
    padding: "8px 18px",
    marginBottom: "14px",
    borderRadius: "10px",
    transition: "all 0.6s ease",
    cursor: "default",
    opacity: 0,
    transform: "translateY(20px)",
    animation: "fadeUp 1s ease forwards",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.textShadow =
      "0 0 10px rgba(43,78,255,0.5), 0 0 20px rgba(43,78,255,0.2)";
    e.currentTarget.style.transform = "scale(1.03)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.textShadow = "none";
    e.currentTarget.style.transform = "scale(1)";
  }}
>
  <h1
    style={{
      color: "#000",
      fontSize: isMobile ? "36px" : "56px",
      fontWeight: "700",
      lineHeight: "1.1",
      letterSpacing: isMobile ? "0.5px" : "1px",
      transition: "all 0.3s ease",
      margin: 0, // ✅ removes any extra margin around “Hi,”
    }}
  >
    Hi, I'm
    <span
      style={{
        color: "#b1f438",
        transition: "color 0.3s ease",
        marginLeft:"10px"
      }}
    >
      Evangelos
    </span>
  </h1>

  <style>
    {`
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
  </style>
</div>

<div
  style={{
    color: "#333",
    padding: "14px 0",
    fontSize: isMobile ? "14px" : "16px",
    lineHeight: "1.6",
    borderRadius: "8px",
    marginBottom: "20px",
    textAlign: isMobile ? "center" : "left",
    transition: "all 0.3s ease",
    cursor: "default",
     textAlign:"center"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.color = "#1a1a1a";
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.textShadow = "0 2px 8px rgba(0,0,0,0.1)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.color = "#333";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.textShadow = "none";
  }}
>
  <p style={{ margin: 0 }}>
    I’m a{" "}
    <strong style={{ color: "#b1f438" }}>
      Software Engineer & Content Creator
    </strong>{" "}
    helping people{" "}
    <strong style={{ color: "#b1f438" }}>break into tech</strong> and{" "}
    <strong style={{ color: "#b1f438" }}>build personal brands</strong> that open
    doors — especially in an AI-driven world.
  </p>
</div>


    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: isMobile ? "center" : "flex-start",
        gap: "12px",
      }}
    >
      <button
  style={{
    backgroundColor: "#b1f438",
    color: "#fff",
    border: "none",
    padding: "10px 22px",
    borderRadius: "25px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontSize: isMobile ? "14px" : "16px",
    width: isMobile ? "100%" : "auto",
  }}
  onClick={() =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }
>
  Work With Me
</button>


      <button
        onClick={() => setShowSocials(true)}
        style={{
          backgroundColor: "#f9f9f9",
          color: "#333",
          border: "1px solid #ddd",
          padding: "10px 22px",
          borderRadius: "25px",
          fontWeight: "600",
          cursor: "pointer",
          fontSize: isMobile ? "14px" : "16px",
          width: isMobile ? "100%" : "auto",
        }}
      >
        Check me out on socials!
      </button>
    </div>
  </div>

  {/* RIGHT STACKED IMAGES */}
  <div
    style={{
      position: "relative",
      marginTop: isMobile ? "20px" : "0", // closer to text
      width: isMobile ? "80vw" : "340px",
      height: isMobile ? "auto" : "380px",
      cursor: "pointer",
      transition: "all 0.4s ease",
      transform: isMobile
        ? "none"
        : isHovered
        ? "rotate(0deg)"
        : "rotate(-5deg)",
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    {/* Bottom */}
    <div
      style={{
        position: "absolute",
        top: isHovered ? "15px" : "22px",
        left: isHovered ? "15px" : "22px",
        width: "100%",
        height: "100%",
        border: "6px solid #000",
        borderRadius: "12px",
        overflow: "hidden",
        transform: isHovered ? "rotate(-8deg)" : "rotate(-12deg)",
        transition: "all 0.5s ease",
        filter: "brightness(0.9)",
        zIndex: 1,
      }}
    >
      <img
        src="/images/evangelos-photo2.jpg"
        alt="Stack background"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>

    {/* Middle */}
    <div
      style={{
        position: "absolute",
        top: isHovered ? "8px" : "12px",
        left: isHovered ? "8px" : "12px",
        width: "100%",
        height: "100%",
        border: "6px solid #000",
        borderRadius: "12px",
        overflow: "hidden",
        transform: isHovered ? "rotate(8deg)" : "rotate(10deg)",
        transition: "all 0.5s ease",
        filter: "brightness(0.95)",
        zIndex: 2,
      }}
    >
      <img
        src="/images/evangelosXReactNation.jpg"
        alt="Stack middle"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>

    {/* Top */}
    <div
      style={{
        position: "relative",
        border: "8px solid #000",
        borderRadius: "12px",
        overflow: "hidden",
        transition: "all 0.4s ease",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        transform: isHovered ? "rotate(-3deg)" : "rotate(0deg)",
        filter: isHovered ? "contrast(1.2) saturate(1.2)" : "none",
        zIndex: 3,
      }}
    >
      <img
        src="/images/evangelosXjetbrains.jpg"
        alt="Evangelos main"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          transition: "all 0.3s ease",
          imageRendering: isHovered ? "pixelated" : "auto",
        }}
      />
    </div>
  </div>

  {/* Decorative Blob */}
  <div
    style={{
      position: "absolute",
      right: isMobile ? "10%" : "5%",
      top: isMobile ? "70%" : "40%",
      width: isMobile ? "180px" : "250px",
      height: isMobile ? "180px" : "250px",
      backgroundColor: "#d6c7ff",
      borderRadius: "50%",
      filter: "blur(60px)",
      opacity: 0.3,
      zIndex: 0,
    }}
  ></div>
</section>


      {/* ✅ SOCIAL POPUP PANE */}
      {showSocials && (
        <div
          onClick={() => setShowSocials(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "30px",
              width: isMobile ? "85%" : "400px",
              textAlign: "center",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              transform: "translateY(0)",
              transition: "transform 0.3s ease, opacity 0.3s ease",
            }}
          >
            <h2 style={{ marginBottom: "20px", fontSize: "22px" }}>
              Connect with me
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                alignItems: "center",
              }}
            >
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ff0000", textDecoration: "none" }}
              >
                🎥 YouTube
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#E1306C", textDecoration: "none" }}
              >
                📸 Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#b1f438", textDecoration: "none" }}
              >
                💼 LinkedIn
              </a>
              <a
                href="mailto:evangelos@email.com"
                style={{ color: "#333", textDecoration: "none" }}
              >
                ✉️ Email Me
              </a>
            </div>

            <button
              onClick={() => setShowSocials(false)}
              style={{
                marginTop: "24px",
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
                padding: "10px 22px",
                borderRadius: "25px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}


      {/* ✅ ABOUT SECTION (HORIZONTAL IMAGE STRIP) */}
<section
  id="about"
  style={{
    backgroundColor: "#fff",
    padding: isMobile ? "80px 20px" : "120px 10%",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Ripple effect container */}
  <div
    id="ripple-container"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      
      zIndex: 0,
    }}
  ></div>

  <h2
    onClick={(e) => {
      const container = document.getElementById("ripple-container");
      const ripple = document.createElement("span");
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ripple.style.position = "absolute";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.width = ripple.style.height = "0px";
      ripple.style.background = "rgba(43,78,255,0.3)";
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.pointerEvents = "none";
      ripple.style.transition =
        "width 0.6s ease, height 0.6s ease, opacity 0.6s ease";
      container.appendChild(ripple);

      requestAnimationFrame(() => {
        ripple.style.width = "400px";
        ripple.style.height = "400px";
        ripple.style.opacity = "0";
      });

      setTimeout(() => container.removeChild(ripple), 600);
    }}
    style={{
      fontSize: isMobile ? "28px" : "42px",
      fontWeight: "700",
      marginBottom: "24px",
      cursor: "pointer",
      position: "relative",
      zIndex: 2,

    }}
  >
    My Mission
  </h2>

 <p
  style={{
    fontSize: isMobile ? "16px" : "18px",
    lineHeight: "1.8",
    textAlign:"center",
    margin: "0 auto 60px",
    zIndex: 2,
    position: "relative",

  }}
>
  I'm a footballer turned software engineer and content creator.{"\n"}
  I love creating content about tech, the successes and lessons I've learned
  as a software engineer — alongside the importance of personal branding in
  an AI-driven world.{"\n\n"}
  In a tech-driven world, I truly believe everybody should be involved in
  the creation or usage of technology.{"\n\n"}
  <strong>Especially when it's used to help aid our lives.</strong>
</p>

  {/* HORIZONTAL IMAGE STACK */}
 {/* HORIZONTAL IMAGE STACK */}
<div
  style={{
    display: "flex",
    justifyContent: "center", // ✅ Center horizontally
    alignItems: "center",
    flexWrap: isMobile ? "wrap" : "nowrap",
    gap: isMobile ? "10px" : "0px",
    margin: "0 auto 60px",

    position: "relative",
    padding: isMobile ? "0" : "0 5%",
    overflowX: isMobile ? "auto" : "visible",

  }}
>
  {[
    "/images/evangelosXReactNation.jpg",
    "/images/evangelosXjetbrains.jpg",
    "/images/evangelosxjavascript.png",
    "/images/evangeloscoding.jpg",
    "/images/techweek.png",
  ].map((src, i, arr) => (
    <div
      key={i}
      style={{
        position: "relative",
        width: isMobile ? "70vw" : "260px",
        height: isMobile ? "180px" : "260px",
        border: "6px solid #000",
        borderRadius: "18px",
        overflow: "hidden",
        transform: !isMobile
          ? `rotate(${i % 2 === 0 ? "-6deg" : "6deg"}) translateX(${
              (i - arr.length / 2) * -40
            }px)` // ✅ symmetrical overlap from center
          : "none",
        transition: "all 0.5s ease",
        cursor: "pointer",
        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
        zIndex: i + 1,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `scale(1.1) rotate(0deg) translateY(-8px)`;
        e.currentTarget.style.zIndex = 10;
        e.currentTarget.firstChild.style.imageRendering = "pixelated";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = !isMobile
          ? `rotate(${i % 2 === 0 ? "-6deg" : "6deg"}) translateX(${
              (i - arr.length / 2) * -40
            }px)`
          : "none";
        e.currentTarget.style.zIndex = i + 1;
        e.currentTarget.firstChild.style.imageRendering = "auto";
      }}
    >
      <img
        src={src}
        alt={`Evangelos ${i + 1}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "all 0.3s ease",
        }}
      />
    </div>
  ))}
</div>


<div
  onClick={() =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }
  style={{
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    backgroundColor: "#b1f438",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(43, 78, 255, 0.4)",
    animation: "bounce 2s infinite",
    margin: "30px auto 0",
  }}
>
  <span
    style={{
      color: "#fff",
      fontSize: "26px",
      lineHeight: 1,
      transform: "translateY(2px)",
    }}
  >
    ↓
  </span>

  <style>
    {`
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-12px);
        }
        60% {
          transform: translateY(-6px);
        }
      }
    `}
  </style>
</div>


</section>


<section
  id="contact"
  style={{
    backgroundColor: "#fff",
    padding: isMobile ? "80px 20px" : "120px 10%",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "40px",
    
  }}
>
  {/* LEFT SIDE TEXT */}
  <div style={{ flex: 1, textAlign: isMobile ? "center" : "left" }}>
    <button
      style={{
        background: "#f2f2f2",
        border: "none",
        padding: "6px 21px",
        borderRadius: "20px",
        fontWeight: "600",
        fontSize: "14px",
        marginBottom: "12px",
        cursor: "default",
      }}
    >
      Contact
    </button>

    <h2
      style={{
        fontSize: isMobile ? "30px" : "48px",
        fontWeight: "700",
        marginBottom: "16px",

      }}
    >
      Want to work together?
    </h2>

    <p
      style={{
        fontSize: isMobile ? "16px" : "18px",
        lineHeight: "1.8",
        color: "#333",
        marginBottom: "30px",

      }}
    >
      If you’re a brand looking to collaborate — through{" "}
      <strong>sponsored content</strong>, <strong>creative partnerships</strong>,
      or <strong>tech-driven projects</strong> — use the form to get in touch.
    </p>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "#f9f9f9",
        borderRadius: "10px",
        padding: "10px 14px",
        maxWidth: "340px",
        margin: isMobile ? "0 auto" : "0",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",

      }}
    >
      <img
        src="/images/evangelosXReactNation.jpg"
        alt="Evangelos"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          objectFit: "cover",
          marginRight: "10px",
        }}
      />
      <p style={{ fontSize: "14px", color: "#555", margin: 0, }}>
        All submissions are reviewed by me ☕.
      </p>
    </div>
  </div>

  {/* RIGHT SIDE FORM */}
  <div
    style={{
      flex: 1,
      background: "#fff",
      border: "1px solid #eee",
      borderRadius: "16px",
      padding: "30px",
      boxShadow: "0 6px 25px rgba(0,0,0,0.05)",
      textAlign: "left",
      maxWidth: "500px",
      width: "85%",
      position:"relative",

    }}
  >
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const service = e.target.service.value;
        const message = e.target.message.value;

        const mailto = `mailto:yourname@email.com?subject=Inquiry about ${encodeURIComponent(
          service
        )}&body=Hi Evangelos,%0D%0A%0D%0AMy name is ${encodeURIComponent(
          name
        )}.%0D%0A${encodeURIComponent(
          message
        )}%0D%0A%0D%0AYou can reach me at: ${encodeURIComponent(email)}`;

        window.location.href = mailto;
      }}
    >
      {/* Name + Email */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: isMobile ? "column" : "row",
          marginBottom: "14px",

        }}
      >
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: "14px", fontWeight: "600" }}>Name</label>
          <input
            name="name"
            type="text"
            placeholder="Jane Smith"
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              marginTop: "4px",
              outline: "none",
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: "14px", fontWeight: "600" }}>Email</label>
          <input
            name="email"
            type="email"
            placeholder="example@gmail.com"
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              marginTop: "4px",
              outline: "none",
            }}
          />
        </div>
      </div>

      {/* Service Selection */}
      <label style={{ fontSize: "14px", fontWeight: "600" }}>
        What are you reaching out about?
      </label>
      <select
        name="service"
        required
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          marginTop: "4px",
          marginBottom: "14px",
          outline: "none",
        }}
      >
        <option value="">Select…</option>
        <option>Sponsored Posts</option>
        <option>Product Reviews</option>
        <option>Brand Ambassadorships</option>
        <option>Speaking Gigs</option>
        <option>Content Creation</option>
        <option>Consulting & Workshops</option>
        <option>Software Development</option>
      </select>

      {/* Message */}
      <label style={{ fontSize: "14px", fontWeight: "600" }}>Message</label>
      <textarea
        name="message"
        rows="4"
        placeholder="Tell me about your project..."
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          marginTop: "4px",
          outline: "none",
          resize: "none",
          marginBottom: "18px",
        }}
      ></textarea>

      {/* Submit Button */}
      <button
        type="submit"
        style={{
          backgroundColor: "#b1f438",
          color: "#fff",
          border: "none",
          padding: "12px 22px",
          borderRadius: "25px",
          fontWeight: "600",
          cursor: "pointer",
          width: "100%",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 6px 18px rgba(43,78,255,0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        Submit
      </button>
    </form>
  </div>
</section>


    </div>
  );
}
