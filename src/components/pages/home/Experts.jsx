import expertsData from "@/data/experts.json";

export default function Experts() {
  const { title, profileImage, doctor, avatars } = expertsData;

  return (
    <section className="experts-section">
      <div className="container experts-container">
        <div className="experts-layout">
          <h2 className="experts-title">{title}</h2>

          <div className="experts-profile-wrap">
            <img src={profileImage} alt={doctor.name} className="experts-profile-image" loading="lazy" />
          </div>

          <div className="experts-content">
            <div className="experts-avatars-track" aria-label="Medical team members">
              {avatars.map((avatar, index) => (
                <span key={avatar} className={`experts-avatar-wrap experts-avatar-wrap--${index}`}>
                  <img src={avatar} alt="" className="experts-avatar" loading="lazy" />
                  <span className="experts-avatar-white" aria-hidden="true" />
                </span>
              ))}
            </div>

            <h3 className="experts-name">{doctor.name}</h3>
            <p className="experts-role">{doctor.role}</p>
            <p className="experts-bio">{doctor.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
