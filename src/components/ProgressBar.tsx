type ProgressBarProps = {
  width: number;
};

const ProgressBar = ({ width } : ProgressBarProps) => {
  return (
    <div className="w-full h-1 rounded-lg bg-[#2d2e5f]">
      <div
        style={{ width: width + "%" }}
        className="h-1 bg-primary rounded-lg"
      ></div>
    </div>
  );
};

export default ProgressBar;
