import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClasses = [s.status];
  statusClasses.push(isOnline ? s.online : s.offline);

  return (
    <li className={s.item}>
      <span className={statusClasses.join(' ')}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
