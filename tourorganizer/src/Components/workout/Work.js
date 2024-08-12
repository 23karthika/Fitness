import React,{useState} from "react";
import Exercises from "./Exercises";
import { Box } from "@mui/material";
import Workout from "./Workout";
 export default function Work()
 {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
    return(
        <Box>
        <Workout setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
        </Box>
    )
}
