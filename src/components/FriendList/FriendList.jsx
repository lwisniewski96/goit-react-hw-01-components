// import PropTypes from 'prop-types';
// import css from './FriendList.module.css';

// export const FriendList = ({ friends }) => {
//   return (
//     <ul class="friend-list">
//       <li class="item">
//         <span class="status"></span>
//         <img class="avatar" src="" alt="User avatar" width="48" />
//         <p class="name"></p>
//       </li>
//     </ul>
//   );
// };


import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(item => (
        <FriendListItem key={item.id} friend={item} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};