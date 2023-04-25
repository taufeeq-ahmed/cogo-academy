import React, { useEffect, useState } from 'react'
import LinkBtn from '../LinkBtn';
import instance from '../../utils/axios';
const ExerciseList = ({ sectionId }) => {
    const [exercise, setExercise] = useState([]);
    useEffect(() => {
        const getExercise = async () => {
            const resp = await instance.get(`/exercise/${sectionId}/list` )
            const exerciseData = await resp.data;
            setExercise(exerciseData)
        }

        getExercise()

    }, [])
    return (
        <div className='exercise' style={{ display: 'flex' }}>
            {
                exercise && exercise?.map((exercise) =>
                    <LinkBtn text={exercise.exercise_name}
                        link={`/admin/exercise/${exercise.exercise_id}/edit`}
                        btnStyle={{ fontSize: '13px', 'backgroundColor': '#F3FAFA', padding: '10px', fontSize: 14, margin: 10 }}
                        key={exercise.exercise_id}
                    />
                )
            }
        </div>
    )
}

export default ExerciseList;