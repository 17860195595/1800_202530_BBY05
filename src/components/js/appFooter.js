class AppFooter extends HTMLElement {
  constructor() {
    super();

    // Create shadow DOM to isolate internal styles
    const shadow = this.attachShadow({ mode: "open" });
    // Create link tag to load external CSS
    const styleLink = document.createElement("link");
    styleLink.setAttribute("rel", "stylesheet");
    styleLink.setAttribute("href", "/src/components/styles/footer.css");

    // Define HTML template
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
         <footer class="foot">
             <div class="foot-grid">
             <div class="foot-image"><img src="/src/assets/images/map.png" /></div>
             <div class="foot-image"><img src="/src/assets/images/traffic.png" /></div>
             <div class="foot-image"><img src="/src/assets/images/settings.png" /></div>
             </div>
         </footer>
    `;
    // Add styles and content
    shadow.appendChild(styleLink);
    shadow.appendChild(wrapper);
  }
}

// Export component for registration
export { AppFooter };
