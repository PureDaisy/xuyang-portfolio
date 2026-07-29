export default function About() {
  return (
    <section id="about" className="content-section">
      <div className="page-shell about-layout">
        <div>
          <p className="section-label">关于我</p>
          <h2>
            比起停留在概念里，
            <br />
            我更喜欢把它做出来。
          </h2>
        </div>

        <div className="about-copy">
          <p>
            我是首都师范大学计算机专业硕士，预计 2027 年毕业。做过后端、移动端和前端，
            也参与过真实在线产品的开发与维护。
          </p>
          <p>
            目前主要探索教育场景中的语音交互与大模型应用。对我来说，技术不是标签，
            而是把需求拆清楚、把体验做完整的一套方法。
          </p>

          <dl className="fact-list">
            <div>
              <dt>教育</dt>
              <dd>首都师范大学，本硕</dd>
            </div>
            <div>
              <dt>方向</dt>
              <dd>AI 应用、语音交互、全栈开发</dd>
            </div>
            <div>
              <dt>状态</dt>
              <dd>2027 届，现居北京</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
