import "./profile.css";
import LogoSearch from "../logoSearch/logoSearch";
import ProfileCard from "../ProfileCard/profileCard";
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
        <ProfileCard location='homepage'/>

    </div>
  );
};
export default ProfileSide;
