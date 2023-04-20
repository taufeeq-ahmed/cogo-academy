import react from "react";
import Dropdown from '../DropDown/Dropdown';
import InputBox from "../InputBox/InputBox";

const AddExercise = () => {
    return (
        <div>
            <div>
                <div>
                    <label> Select Language</label>
                    <Dropdown placeHolder={'Language'}
                        options
                        onChange
                        styles={{}}
                    />
                </div>
                <div> 
                    <label>Exercise Name</label>
                    <InputBox/>
                </div>
                <div> 
                    <label>Instructions</label>
                    <InputBox/>
                </div>
                <div>
                    <label > Enter Code </label>
                    
                </div>
            </div>
        </div>
    )
}
export default AddExercise;