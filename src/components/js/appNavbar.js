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
          <div class="menuItem" id="homeBtn">Home</div>
          <div class="menuItem" id="aboutBtn">About</div>
          <div class="menuItem" id="servicesBtn">Services</div>
          <div class="menuItem" id="authBtn"></div>
        </div>
      </div>
    </div>
    `;
    // Add styles and content
    shadow.appendChild(styleLink);
    shadow.appendChild(wrapper);
    this.checkAuthState();
    this.initMenuBtn();
    this.initMenuItems();
  }

  async checkAuthState() {
    const authBtn = this.shadowRoot.querySelector("#authBtn");
    
    try {
      // Import Firebase auth
      const { auth } = await import("../../js/firebaseConfig.js");
      const { onAuthStateChanged } = await import("firebase/auth");
      
      // Listen for auth state changes
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is logged in, show "Sign Out"
          authBtn.textContent = "Sign Out";
          authBtn.id = "logoutBtn";
          authBtn.style.display = "block";
          // Setup logout handler
          this.setupLogoutHandler();
        } else {
          // User is not logged in, hide the button
          authBtn.style.display = "none";
        }
      });
    } catch (error) {
      console.error("Failed to check auth state:", error);
      // Hide button if Firebase is not available
      authBtn.style.display = "none";
    }
  }

  setupLogoutHandler() {
    const logoutBtn = this.shadowRoot.querySelector("#logoutBtn");
    const menuBox = this.shadowRoot.querySelector(".menuBox");
    
    if (logoutBtn && !logoutBtn.hasAttribute("data-logout-handler")) {
      logoutBtn.setAttribute("data-logout-handler", "true");
      
      logoutBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Close the menu
        menuBox.classList.remove("fade");
        
        // Import and call logout function
        try {
          const { logoutUser } = await import("../../js/authentication.js");
          await logoutUser();
        } catch (error) {
          console.error("Logout failed:", error);
          // Fallback: redirect to home page
          window.location.href = "../../index.html";
        }
      });
    }
  }

  initMenuBtn() {
    const menuBtn = this.shadowRoot.querySelector(".rightBox");
    const menuBox = this.shadowRoot.querySelector(".menuBox");
    if (menuBtn && menuBox) {
      // Toggle menu on menu button click
      menuBtn.addEventListener("click", (e) => {
        console.log("you click the menu button");
        e.stopPropagation();
        menuBox.classList.toggle("fade");
      });

      // Close menu when clicking outside the navbar
      this.handleClickOutside = (e) => {
        if (!this.shadowRoot.contains(e.target)) {
          menuBox.classList.remove("fade");
        }
      };
      
      document.addEventListener("click", this.handleClickOutside);
    } else {
      console.error("Menu elements not found in the shadow DOM");
    }
  }

  initMenuItems() {
    const menuBox = this.shadowRoot.querySelector(".menuBox");
    
    // Add click handlers for menu items
    const homeBtn = this.shadowRoot.querySelector("#homeBtn");
    if (homeBtn) {
      homeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const currentPath = window.location.pathname;
        
        // Determine correct path based on current location
        if (currentPath.includes("/pages/")) {
          // We're in pages folder, go to main.html
          window.location.href = "./main.html";
        } else if (currentPath.endsWith("/index.html") || currentPath.endsWith("/")) {
          // We're already on index page, close menu only
          window.location.href = "./src/pages/main.html";
          console.log("home clicked");
          if (menuBox) {
            menuBox.classList.remove("fade");
          }
        } else {
          // We're on a different page, go to index.html
          // window.location.href = "../../index.html";
        }
      });
    }

    const aboutBtn = this.shadowRoot.querySelector("#aboutBtn");
    if (aboutBtn) {
      aboutBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log("About clicked");
        if (menuBox) {
          menuBox.classList.remove("fade");
        }
      });
    }

    const servicesBtn = this.shadowRoot.querySelector("#servicesBtn");
    if (servicesBtn) {
      servicesBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log("Services clicked");
        if (menuBox) {
          menuBox.classList.remove("fade");
        }
      });
    }
  }
}

// Export component for registration
export { AppNavbar };
