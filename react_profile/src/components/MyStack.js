import css from '../images/techIcons/css.svg';
import bash from '../images/techIcons/gitBash.svg';
import git from '../images/techIcons/git.svg';
import reactIcon from '../images/techIcons/reactIcon.svg';
import html5 from '../images/techIcons/html5.svg';
import webpack from '../images/techIcons/webpack.svg';
import js from '../images/techIcons/js.svg';
import npm from '../images/techIcons/npm.svg';
import nodejs from '../images/techIcons/nodejs.svg';

export default function MyStack() {
  return (
    <section className="my-stack">
      <h2 className="my-stack__title">технологии</h2>
      <div className="my-stack__icons">
        <img className="my-stack__icon" src={reactIcon} alt="Git" />
        <img className="my-stack__icon" src={js} alt="JavaScript" />
        <img className="my-stack__icon" src={html5} alt="HTML" />
        <img className="my-stack__icon" src={css} alt="css" />
        <img className="my-stack__icon" src={bash} alt="GitBash" />
        <img className="my-stack__icon" src={git} alt="Git" />
        <img className="my-stack__icon" src={webpack} alt="webpack" />
        <img className="my-stack__icon" src={npm} alt="npm.js" />
        <img className="my-stack__icon" src={nodejs} alt="node.js" />
      </div>
    </section>
  );
}
