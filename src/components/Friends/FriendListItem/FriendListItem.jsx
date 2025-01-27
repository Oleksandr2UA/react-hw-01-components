import PropTypes from 'prop-types';

import { Image, Status, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Status className="status" $isOnline={isOnline}></Status>
      <Image className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name className="name">{name}</Name>
    </>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
