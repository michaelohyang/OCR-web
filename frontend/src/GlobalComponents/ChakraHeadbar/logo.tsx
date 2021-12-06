import { HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logoImage from "./studyFindLogo.jpg";
import "./ChakraHeadbar.css";
/**
 * Shows the StudyFind logo in the headbar
 */
export default function LogoImage() {
  return (
    <HStack>
      <HStack position="relative">
        <Link to="/">
          <div>
            <img
              src={logoImage}
              alt="logoImage"
              className="resizeStudyFindLogo"
            />
            <Text fontFamily="monospace" fontSize="2em" position="relative">
              StudyFind
            </Text>
          </div>
        </Link>
      </HStack>
    </HStack>
  );
}
