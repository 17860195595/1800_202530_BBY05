class AppFooter extends HTMLElement {
  constructor() {
    super();

    // 创建 shadow DOM，隔离内部样式
    const shadow = this.attachShadow({ mode: "open" });
    // 创建 link 标签引入外部 CSS
    const styleLink = document.createElement("link");
    styleLink.setAttribute("rel", "stylesheet");
    styleLink.setAttribute("href", "../components/styles/footer.css");

    // 定义 HTML 模板
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
         <footer class="foot">
             <div class="foot-grid">
             <div class="foot-image"><img src="../images/map.png" /></div>
             <div class="foot-image"><img src="../images/traffic.png" /></div>
             <div class="foot-image"><img src="../images/settings.png" /></div>
             </div>
         </footer>
    `;
    // 添加样式与内容
    shadow.appendChild(styleLink);
    shadow.appendChild(wrapper);
  }
}

// 注册组件
customElements.define("app-footer", AppFooter);
