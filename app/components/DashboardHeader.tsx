import React from "react";
import { UserIcon } from "~/icons/icons";
import UploadWidget from "./UploadWidget/UploadWidgetButton";

interface DashboardHeaderProps {
  userName: string;
  profilePicture: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  userName,
  profilePicture,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-blue-700 font-extrabold text-[40px] leading-12">
          Dashboard
        </h1>
        <p className="text-gray-400 mb-5">
          Welcome to your dashboard, {userName}!
        </p>
      </div>
      <div className="relative">
        <div className="bg-gray-100 h-20 w-20 rounded-full overflow-hidden relative flex justify-center items-center">
          {profilePicture ? (
            <img src={profilePicture} alt="Profile" className="profile-image" />
          ) : (
            <UserIcon className="w-10 h-10" />
          )}{" "}
        </div>
        <UploadWidget />
      </div>
    </div>
  );
};

export default DashboardHeader;
