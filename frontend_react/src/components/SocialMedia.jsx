import {
    BsFillCloudArrowDownFill,
    BsGithub,
  } from "react-icons/bs";
  import { FaFacebookF } from "react-icons/fa";
  import { AiFillLinkedin } from "react-icons/ai";
  
  
  const SocialMedia = () => (
    <div className="app__social">
      <div>
        <a
          target="_blank"
          title="Resume"
          rel="noopener noreferrer nofollow"
          href="https://drive.google.com/file/d/11mvnEApxB8q42WA0aFrjynD7ycRmxUnY/view?usp=drivesdk"
        >
          {" "}
          <BsFillCloudArrowDownFill />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          title="GitHub"
          rel="noopener noreferrer nofollow"
          href="https://github.com/Nagarjuna325"
        >
          {" "}
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          title="Facebook"
          rel="noopener noreferrer nofollow"
          href=""
        >
          {" "}
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          title="Linkedin"
          rel="noopener noreferrer nofollow"
          href="https://www.linkedin.com/in/nagarjunabollanb/"
        >
          {" "}
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
  
  export default SocialMedia;