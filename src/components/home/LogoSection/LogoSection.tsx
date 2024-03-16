import Image from "next/image";

const LogoSection: React.FC = () => {
  return (
    <>

<div className="flex justify-center h-1/4 bg-blue-950 w-screen">
            <div className="w-40" style={{ marginTop: "-10vw !important", zIndex: "999" }}>
              <Image
                src="/images/candy-logo.png"
                alt="logo image"
                layout="responsive"
                width={500}
                height={300}
                objectFit="cover"
                objectPosition="center"
                quality={100}
                priority
              />
            </div>
          </div>
    </>
  );
};

export default LogoSection;
