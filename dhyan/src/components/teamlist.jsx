import React from "react";
import TeamCard from "./teamcard";

const teamMembers = [
  { name: "Purvika", role: "Frontend Developer", image: "https://www.google.com/imgres?q=images%20of%20man&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F48%2FOutdoors-man-portrait_%2528cropped%2529.jpg%2F1200px-Outdoors-man-portrait_%2528cropped%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMan&docid=DOVv0vUvlvQB7M&tbnid=q9uxtYqN4v1zHM&vet=12ahUKEwjVi47KieOLAxUTRmcHHaq_M80QM3oECBkQAA..i&w=1200&h=1498&hcb=2&ved=2ahUKEwjVi47KieOLAxUTRmcHHaq_M80QM3oECBkQAA" },
  { name: "Harshith", role: "Backend Developer", image: "https://www.google.com/imgres?q=images%20of%20man&imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fportrait-white-man-isolated_53876-40306.jpg&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fman-face&docid=4JvHjCMKYtVnyM&tbnid=XkBD0umPAvj35M&vet=12ahUKEwjVi47KieOLAxUTRmcHHaq_M80QM3oECG0QAA..i&w=626&h=487&hcb=2&ved=2ahUKEwjVi47KieOLAxUTRmcHHaq_M80QM3oECG0QAA" },
  { name: "Gagan R", role: "UI/UX Designer", image: "https://www.google.com/imgres?q=images%20of%20man&imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fyoung-bearded-man-with-striped-shirt_273609-5677.jpg&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fman&docid=f_urGo24LL105M&tbnid=pu58wTElY3WJfM&vet=12ahUKEwjVi47KieOLAxUTRmcHHaq_M80QM3oECEgQAA..i&w=626&h=417&hcb=2&ved=2ahUKEwjVi47KieOLAxUTRmcHHaq_M80QM3oECEgQAA" },
  { name: "VC Dhyan", role: "Project Manager", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dman&psig=AOvVaw0MA8CcHzw8jqcpeDVy_Zvf&ust=1740718958543000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjk2eWJ44sDFQAAAAAdAAAAABAJ" }
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
