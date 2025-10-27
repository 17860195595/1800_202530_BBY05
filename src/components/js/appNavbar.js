class AppNavbar extends HTMLElement {
  constructor() {
    super();

    // Create shadow DOM to isolate internal styles
    const shadow = this.attachShadow({ mode: "open" });
    // Create link tag to load external CSS
    const styleLink = document.createElement("link");
    styleLink.setAttribute("rel", "stylesheet");
    styleLink.setAttribute("href", "/src/components/styles/navbar.css");

    // Define HTML template
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
        <div class="nav">
      <div class="leftBox">
        <div class="imgBox">
          <img src="/src/assets/images/ClearWay_logo.png" alt="" />
        </div>
        <div class="text">ClearWay</div>
      </div>
      <div class="rightBox">
        <div class="btn">
          <img src="/src/assets/images/menuBtn.png" alt="" />
        </div>
        <div class="menuBox">
          <div class="menuItem">Home</div>
          <div class="menuItem">About</div>
          <div class="menuItem">Services</div>
          <div class="menuItem">Contact</div>
        </div>
      </div>
    </div>
    `;
    // Add styles and content
    shadow.appendChild(styleLink);
    shadow.appendChild(wrapper);
    this.initMenuBtn();
  }

  initMenuBtn() {
    const menuBtn = this.shadowRoot.querySelector(".rightBox");
    const menuBox = this.shadowRoot.querySelector(".menuBox");
    if (menuBtn && menuBox) {
      menuBtn.addEventListener("click", () => {
        console.log("you click the menu button");
        menuBox.classList.toggle("fade");
      });
    } else {
      console.error("Menu elements not found in the shadow DOM");
    }
  }
}

// Register component
customElements.define("app-navbar", AppNavbar);
