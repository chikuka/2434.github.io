document.addEventListener("DOMContentLoaded", () => {

    const overlay = document.getElementById("overlay");
    const panel = document.getElementById("panel");
    const panelContent = document.getElementById("panelContent");
    const closeBtn = document.getElementById("closeBtn");
  
    const contentMap = {
      lzt: `<h2>LZT</h2><p>This is scrollable content for LZT.</p>`,
      ztm: `<h2>ZTM</h2><p>ZTM lore and info here.</p>`,
      lxm: `<h2>LXM</h2><p>LXM description.</p>`,
      ntx: `<h2>NTX</h2><p>NTX profile and background.</p>`,
      iln: `<h2>ILN</h2><p>ILN group description.</p>`,
      xsl: `<h2>XSL</h2><p>XSL information.</p>`,
      krs: `<h2>KRS</h2><p>KRS profile.</p>`,
      dnt: `<h2>DNT</h2><p>DNT information.</p>`,
      btb: `<h2>BTB</h2><p>BTB information.</p>`
    };
  
    // Attach click events to all cards
    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.dataset.id; // direct from data-id
        panelContent.innerHTML = contentMap[id] || "<h2>Unknown</h2><p>No content available.</p>";
  
        const glowColor = getComputedStyle(card).getPropertyValue("--glow-color").trim();
        if (glowColor) {
          panel.style.setProperty("--panel-glow", glowColor);
        } else {
          panel.style.removeProperty("--panel-glow");
        }
  
        overlay.classList.add("active");
        document.body.classList.add("panel-open");
      });
    });
  
    // Close panel
    function closePanel() {
      overlay.classList.remove("active");
      document.body.classList.remove("panel-open");
    }
  
    closeBtn.addEventListener("click", closePanel);
    overlay.addEventListener("click", e => { if (e.target === overlay) closePanel(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closePanel(); });
  
  });
  