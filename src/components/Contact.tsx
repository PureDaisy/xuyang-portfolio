export default function Contact() {
  return (
    <footer id="contact" className="site-footer">
      <div className="page-shell">
        <div className="contact-panel">
          <div>
            <p className="section-label">保持联系</p>
            <h2>有合适的项目或机会，<br />欢迎直接联系我。</h2>
          </div>
          <div className="contact-links">
          <a
            href="mailto:1571461819@qq.com"
            className="contact-link"
          >
            <span>邮箱</span>
            <strong>1571461819@qq.com</strong>
          </a>
          <a
            href="https://github.com/PureDaisy"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span>GitHub</span>
            <strong>@PureDaisy</strong>
          </a>
          </div>
        </div>

        <div className="footer-meta">
          <span>© {new Date().getFullYear()} 许阳</span>
          <span>设计与开发于北京</span>
        </div>
      </div>
    </footer>
  );
}
