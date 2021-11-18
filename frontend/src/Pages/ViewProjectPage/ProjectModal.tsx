import { Box } from "@chakra-ui/layout";
import "./ViewProjectPage.css";
import { Link } from "react-router-dom";

interface ProjectModalInterface {
  projects: any;
  k: string;
  removeProject: Function;
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
        <Link to="/upload" onClick={() => props.projects[props.k].id}>
          <img
            src={
              "https://geology.utah.gov/apps/pubs_landing/preview-not-available.gif"
            }
            alt="imagePreview"
          />
          <Box p="3">
            <Box
              mt="2"
              fontSize="larger"
              fontWeight="bold"
              as="h2"
              textAlign="center"
              lineHeight="tight"
              overflow="hidden"
              isTruncated
            >
              {props.projects[props.k].title}
            </Box>
            <Box
              maxWidth="20em"
              mt="2"
              fontSize="medium"
              as="h2"
              textAlign="center"
              isTruncated
            >
              {props.projects[props.k].description}
            </Box>
          </Box>
        </Link>
        <div className="deleteButton">
          <button
            onClick={() => props.removeProject(props.projects[props.k].id)}
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
