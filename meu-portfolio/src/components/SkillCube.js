const SkillCube = ({ icon, label }) => {
    return (
      <div className="cube-container">
        <div className="cube">
          <div className="face front">
            <img src={icon} alt={label} />
          </div>
          <div className="face back"></div>
          <div className="face left"></div>
          <div className="face right"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
        <span>{label}</span>
      </div>
    );
  }
  
  export default SkillCube;