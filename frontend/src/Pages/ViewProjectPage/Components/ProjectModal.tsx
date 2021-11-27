import { Box } from "@chakra-ui/layout";
import "../ViewProjectPage.css";
import { Link } from "react-router-dom";

interface ProjectModalInterface {
  projects: any;
  k: string;
  removeProject: Function;
  selectProject: Function;
}

function ProjectModal(props: ProjectModalInterface) {
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
        <Link to="/existDigitalForm" onClick={() => props.selectProject(props.k)}>
          <img
            src={
              "https://geology.utah.gov/apps/pubs_landing/preview-not-available.gif"
            }
            alt="imagePreview"
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
            onClick={() => props.removeProject(props.projects[props.k])}
            className="deleteButtonText"
          >
            x
          </button>
        </div>
      </Box>
    </div>
  );
}

export default ProjectModal;
