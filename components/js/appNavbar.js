class AppNavbar extends HTMLElement {
  constructor() {
    super();

    // 创建 shadow DOM，隔离内部样式
    const shadow = this.attachShadow({ mode: "open" });
    // 创建 link 标签引入外部 CSS
    const styleLink = document.createElement("link");
    styleLink.setAttribute("rel", "stylesheet");
    styleLink.setAttribute("href", "../components/styles/navbar.css");

    // 定义 HTML 模板
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
        <div class="nav">
      <div class="leftBox">
        <div class="imgBox">
          <img src="../images/ClearWay_logo.png" alt="" />
        </div>
        <div class="text">ClearWay</div>
      </div>
      <div class="rightBox">
        <div class="btn">
          <img src="../images/menuBtn.png" alt="" />
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
    // 添加样式与内容
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

// 注册组件
customElements.define("app-navbar", AppNavbar);
