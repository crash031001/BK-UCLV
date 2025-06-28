import UserProfileInfo from "./UserProfileInfo";
import UserProfileActions from "./UserProfileActions";

const UserProfileSection = () => {
  return (
    <div className="mt-auto pt-4 border-t border-blue-400">
      <UserProfileInfo />
      <UserProfileActions />
    </div>
  );
};

export default UserProfileSection;
