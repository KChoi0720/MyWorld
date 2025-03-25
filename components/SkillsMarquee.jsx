import Image from "next/image";

const skillIcons = [
  "/icons/git.png",
  "/icons/vscode.png",
  "/icons/pycharm.png",
  "/icons/aws.png",
  "/icons/azure.png",
  "/icons/docker.png",
  "/icons/kubernetes.png",
  "/icons/react.png",
  "/icons/nodejs.png",
  "/icons/python.png",
  "/icons/mongodb.png",
  "/icons/mysql.png",
  "/icons/nextjs.png",
  "/icons/tailwindcss.png",
  "/icons/salesforce.png",
  "/icons/terraform.png",
  "/icons/devops.png",
  "/icons/powerbi.png",
  "/icons/ETL.png",
];

const SkillsMarquee = () => {
  return (
    <div className="marquee-container">
      <h2 className="text-center text-sm text-gray-500 dark:text-white mb-4">
      I Use the Following Technologies and Skill-sets.
      </h2>
      <div className="marquee">
        <div className="marquee-content">
          {skillIcons.map((icon, index) => (
            <div key={index} className="marquee-item">
              <Image src={icon} alt="Skill Icon" width={35} height={35} />
            </div>
          ))}
          {/* Duplicate icons for smooth infinite scrolling */}
          {skillIcons.map((icon, index) => (
            <div key={`dup-${index}`} className="marquee-item">
              <Image src={icon} alt="Skill Icon" width={35} height={35} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsMarquee;
