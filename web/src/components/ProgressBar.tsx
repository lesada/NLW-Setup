import * as Progress from "@radix-ui/react-progress";

interface ProgressBarProps {
  progress: number;
}
const ProgressBar = (props: ProgressBarProps) => {
  return (
    <Progress.Root
      className="h-3 rounded-xl bg-zinc-700 w-full mt-4"
      value={66}
    >
      <Progress.Indicator
        className="h-3 max-w-full rounded-xl bg-violet-600  ease-out duration-300"
        style={{ width: `${props.progress}%` }}
      />
    </Progress.Root>
  );
};

export default ProgressBar;
