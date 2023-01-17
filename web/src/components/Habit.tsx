interface HabitProps {
  completed: number;
}

export function Habit(props: HabitProps) {
  return (
    <div className="text-white w-10 h-10 bg-zinc-900 rounded m-2 flex items-center justify-center">
      <h1>{props.completed}</h1>
    </div>
  );
}
