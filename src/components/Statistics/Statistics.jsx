import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({ title, stats }) => (
  <section className={s.statistics}>
    {title && <h2 className="title">{title}</h2>}

    <ul className={s.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className={s.item}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
