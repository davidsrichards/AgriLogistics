import ThemeImage from "./ThemeImages";

function ThirdComponent() {
  return (
    <div className="flex items-center justify-center flex-col gap-8 mt-12">
      <h1 className="text-[2.5rem] font-semibold">Meet our Team</h1>
      <ThemeImage />
    </div>
  );
}

export default ThirdComponent;
