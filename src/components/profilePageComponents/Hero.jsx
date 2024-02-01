// import "./Hero.css";

const ProfileHero = () => {
  const backgroundImage = "/images/peak_light.png";

  return (
    <div
      className="hero-container relative flex justify-center shadow-lg shadow-slate-400"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "200px",
        objectFit: "contain",
      }}
    >
      <div className="h-36 w-36 absolute -bottom-16">
        <img
          src="/images/profile.avif"
          alt="User"
          className="rounded-full object-cover w-full h-full border-slate-50 ring-offset-2 ring-4"
        />
      </div>
    </div>
  );
};

export default ProfileHero;
