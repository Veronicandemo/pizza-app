import { useSelector } from 'react-redux';

const UserName = () => {
  const userName = useSelector((state) => state.user.UserName);
  if (!userName) return null;
  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
};

export default UserName;
