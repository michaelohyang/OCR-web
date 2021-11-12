import { Center } from "@chakra-ui/layout";
import "./DisplayProject.css";

interface DisplayProjectProps {
  projectArray: [];
  removeProject: (id: any) => void;
}

export default function DisplayProject(props: DisplayProjectProps) {
  return (
    <div className="resizeImage">
      {(props.projectArray || []).map((url: any, id: any) => (
        <>
            <Center bg="tomato" h="100px" color="white">
                {/* <img src={url.image} alt="..." /> */}
                <button onClick={() => props.removeProject(url.id)}>x</button>
            </Center>
        </>
      ))}
    </div>
  );
}
