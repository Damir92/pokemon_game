import s from './style.module.css';

const Layout = ({ id = 0, title = '', desc = '', urlBg = '', colorBg = '' }) => {
  let style = {};

  colorBg && (style['backgroundColor'] = colorBg);
  urlBg && (style['backgroundImage'] = `url(${urlBg})`);

  return (
    <section
      className={s.root}
      id={id}
      style={style}
    >
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full}`}>
            <p>{desc}</p>
          </div>
        </article>
      </div>
    </section>
  )
};

export default Layout;
