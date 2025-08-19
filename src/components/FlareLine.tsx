const FlareLine = () => {
  return (
    <div className="flex justify-center relative z-50">
      <div className="absolute top-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute top-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4" />
      <div className="absolute top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
    </div>
  );
};

export default FlareLine;
