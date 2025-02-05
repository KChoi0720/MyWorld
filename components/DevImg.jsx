import Image from "next/image";


// const DevImg = ({ containerStyles, imgSrc }) => {
//   return (
//     <div className={`${containerStyles}`}>
//       <Image 
//       src={imgSrc} 
//       priority 
//       alt="" 
//       height={350} 
//       width={420} 
//       className="relative left-20 top-12"
//       />
//     </div>
//   )
// };

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt='' />
    </div>
  );
};

export default DevImg
