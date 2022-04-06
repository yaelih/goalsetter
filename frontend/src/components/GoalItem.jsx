import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice'

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h1>{goal.text}</h1>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">X</button>
    </div>
  );
}

export default GoalItem;
