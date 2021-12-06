import { Box } from "@chakra-ui/layout";
import "../ViewProjectPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import blue from "./blue.jpg";
import yellow from "./yellow.jpg";
import green from "./green.jpg";
import red from "./red.jpg";

interface ProjectModalInterface {
  projects: any;
  k: string;
  removeProject: Function;
  selectProject: Function;
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
        <Link
          to={{ pathname: "/projectDigitalForm", state: { projectID: props.k } }}
          onClick={() => props.selectProject(props.k)}
        >
          <img
            src={colors[Math.floor(Math.random() * colors.length)]}
            alt="imagePreview"
            className="projectImage"
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
          </Box>
        </Link>
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
    </div>
  );
}

export default ProjectModal;
