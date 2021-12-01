import { Box } from "@chakra-ui/layout";
import "../ViewProjectPage.css";
import { Link, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import blue from "./blue.jpg";
import yellow from "./yellow.jpg";
import green from "./green.jpg";
import red from "./red.jpg";
import deleteIcon1 from "./deleteIcon.png";
import { withRouter } from "react-router";

interface ProjectModalInterface {
  projects: any;
  k: string;
  removeProject: Function;
}

function ProjectModal(props: ProjectModalInterface) {
  const [colors] = useState<string[]>([blue, yellow, green, red]);

  return (
    <div>
      <Box
        maxW="sm"
        bg="white"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        marginTop="0.5em"
        className="modalBox"
      >
        <Link to={{ pathname: "/upload", state: { projectID: props.k } }}>
          <img
            src={colors[Math.floor(Math.random() * colors.length)]}
            alt="imagePreview"
            className="projectImageResize"
          />
          <Box p="4">
            <Box
              mt="2"
              maxWidth="20em"
              fontSize="larger"
              fontWeight="bold"
              as="h2"
              textAlign="center"
              lineHeight="tight"
              overflow="hidden"
              _hover={{ textDecorationLine: "underline" }}
              isTruncated
            >
              {props.projects[props.k].project_name}
            </Box>
            <Box
              mt="2"
              maxWidth="20em"
              fontSize="larger"
              textAlign="center"
              lineHeight="tight"
              overflow="hidden"
              isTruncated
            >
              {props.projects[props.k].description}
            </Box>
            <div className="deleteButton">
              <button
                onClick={() => props.removeProject(props.k)}
                className="deleteButtonText"
              >
                &times;
                {/* <img src={deleteIcon1} /> */}
              </button>
            </div>
          </Box>
        </Link>
      </Box>
    </div>
  );
}

export default ProjectModal;
