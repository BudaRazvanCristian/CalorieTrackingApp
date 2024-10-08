import { useState } from "react";

export default function GoalSettercomponent({ onResult, onBack }) {
  const [weight, setWeight] = useState(70); // in kg
  const [goalWeight, setGoalWeight] = useState(65); // goal weight
  const [height, setHeight] = useState(175); // in cm
  const [age, setAge] = useState(25); // in years
  const [gender, setGender] = useState("male"); // male or female
  const [activityLevel, setActivityLevel] = useState(1.55); // Moderately active
  const [goal, setGoal] = useState("maintain"); // maintain, lose, gain
  const [result, setResult] = useState(null);

  const calculateBMR = () => {
    let BMR;
    if (gender === "male") {
      BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    return BMR;
  };

  const calculateTDEE = (BMR) => {
    return BMR * activityLevel;
  };

  const calculateGoalCalories = (TDEE) => {
    switch (goal) {
      case "lose":
        return TDEE - 500;
      case "gain":
        return TDEE + 500;
      default:
        return TDEE;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const BMR = calculateBMR();
    const TDEE = calculateTDEE(BMR);
    const goalCalories = calculateGoalCalories(TDEE);
    setResult({
      BMR: BMR.toFixed(2),
      TDEE: TDEE.toFixed(2),
      goalCalories: goalCalories.toFixed(2),
    });

    // Transmite rezultatul la componenta părinte
    if (onResult) {
      onResult({
        BMR: BMR.toFixed(2),
        TDEE: TDEE.toFixed(2),
        goalCalories: goalCalories.toFixed(2),
        goalWeight: goalWeight,
      });
    }
  };

  return (
    <>
      <div className="header-calorie-component">
        <span>Calorie Goal</span>
        <a onClick={onBack}>Back</a>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Current Weight (kg):
          <input
            type="number"
            name="currentWeight"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </label>

        <label>
          Goal Weight (kg):
          <input
            type="number"
            name="goalWeight"
            value={goalWeight}
            onChange={(e) => setGoalWeight(Number(e.target.value))}
          />
        </label>

        <label>
          Age:
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </label>

        <label>
          Gender:
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <label>
          Height (cm):
          <input
            type="number"
            name="height"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </label>

        <label>
          Weekly Goal:
          <select
            name="weeklyGoal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            <option value="maintain">Maintain weight</option>
            <option value="gain">Gain weight</option>
            <option value="lose">Lose weight</option>
          </select>
        </label>

        <label>
          Activity Level:
          <select
            name="activityLevel"
            value={activityLevel}
            onChange={(e) => setActivityLevel(Number(e.target.value))}
          >
            <option value="1.2">Sedentary</option>
            <option value="1.375">Lightly active</option>
            <option value="1.55">Moderately active</option>
            <option value="1.725">Very active</option>
            <option value="1.9">Super active</option>
          </select>
        </label>
        <div className="button-calorie">
          <button type="submit">Calculate</button>
        </div>
      </form>
      {result && (
        <div>
          <h3>Results</h3>

          <p>Goal Calories: {Math.ceil(result.goalCalories)} calories/day</p>
        </div>
      )}
    </>
  );
}
