import React from "react";
import TeamCard from "./TeamCard";

const teamMembers = [
  { name: "Alice Johnson", role: "Frontend Developer", image: "https://i.pravatar.cc/100?img=1" },
  { name: "Bob Smith", role: "Backend Developer", image: "https://i.pravatar.cc/100?img=2" },
  { name: "Charlie Brown", role: "UI/UX Designer", image: "https://i.pravatar.cc/100?img=3" },
  { name: "Diana Prince", role: "Project Manager", image: "https://i.pravatar.cc/100?img=4" }
];

const TeamList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
      {teamMembers.map((member, index) => (
        <TeamCard key={index} member={member} />
      ))}
    </div>
  );
};

export default TeamList;
