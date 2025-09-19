// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLaptopCode, faShieldAlt, faWrench } from "@fortawesome/free-solid-svg-icons";

function ExperienceCard({ title, children }) {
  return (
    <div className="p-10 rounded-2xl grid gap-6 grid-cols-[1fr_auto] grid-rows-[auto_auto_2px] font-sans text-gray-700 shadow-[-20px_20px_40px_rgba(0,0,0,0.25)] bg-gradient-to-bl from-gray-200 to-gray-100">
      {/* Title */}
      <div className="text-xl font-semibold uppercase self-end break-words col-span-1">
        {title}
      </div>

      {/* Icon */}
      <div className="text-4xl col-start-2">
        {/* <FontAwesomeIcon
          icon={icon}
          className="text-transparent bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text"
        /> */}
      </div>

      {/* Content */}
      <div className="col-span-2">
        {children}
      </div>

      {/* Gradient Bar */}
      <div className="h-[2px] bg-gradient-to-r from-red-500 to-blue-500 col-span-2"></div>
    </div>
  );
}

export default ExperienceCard;
