import {useRef, useEffect} from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeTitle } from "../features/screenSlice";

function DrumButton(props) {
    const sounds = {
         "Heater 1" : "./src/assets/Heater-1.mp3",
         "Heater 2" : "./src/assets/Heater-2.mp3",
         "Heater 3" : "./src/assets/Heater-3.mp3",
         "Heater 4" : "./src/assets/Heater-4_1.mp3",
         "Clap" : "./src/assets/Heater-6.mp3",
         "Closed-HH"  : "./src/assets/Cev_H2.mp3",
         "Open-HH"  : "./src/assets/Dsc_Oh.mp3",
         "Kick-n-Hat" : "./src/assets/Kick_n_Hat.mp3",
         "Kick"  : "./src/assets/RP4_KICK_1.mp3"
    }

    const power = useSelector(state => state.power);
    const volume = useSelector(state => state.volume);
    const dispatch = useDispatch();
    const ref = useRef(null);

    useEffect(() => {
        const light = document.querySelector(`#${props.sound.replace(" ", "-")} > .drum-button-light`);

        if(!power.on) dispatch(changeTitle('Drum Machine'))

        const handleMouseDown = (event) => {
            if(power.on && (event.type == "mousedown" || event.key == props.letter.toLowerCase())) {
                const audio = new Audio(sounds[props.sound]);
                audio.volume = volume.value * 0.01;
                audio.type = "audio/mp3";
                audio.play();
                light.classList.add('active-light');
                console.log(volume.value * 0.01)
                dispatch(changeTitle(props.sound));
            }
        }

        const handleMouseUp = () => {
            light.classList.remove('active-light');
        }

        const btn = ref.current;
        btn.addEventListener("mousedown", handleMouseDown);
        btn.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("keydown", handleMouseDown);
        document.addEventListener("keyup", handleMouseUp);

        return () => {
            btn.removeEventListener("mousedown", handleMouseDown);
            btn.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("keydown", handleMouseDown);
            document.removeEventListener("keyup", handleMouseUp);
        }
    }, [power.on, volume.value]);
    
    return (
        <td>
            <button id={props.sound.replace(" ", "-")} className="drum-button" ref={ref} tabIndex={-1}>
                <div className="drum-button-letter">{props.letter}</div>
                <div className="drum-button-light" />
            </button>
        </td>
    )

    
}

export default DrumButton