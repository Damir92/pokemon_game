import s from './style.module.css';

import bg1 from '../../assets/bg1.jpg';
import bg2 from '../../assets/bg2.jpg';

const Layout = ({ id = 0, title = '', desc = '', urlBg = '', colorBg = '' }) => {
  let style = {};

  if (urlBg === 'bg1') {
    style['backgroundImage'] = `url(${bg1})`;
  } else if (urlBg === 'bg2') {
    style['backgroundImage'] = `url(${bg2})`;
  }

  if (colorBg) {
    style['backgroundColor'] = colorBg;
  }

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
