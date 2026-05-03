import ScrollAnimation from "../ui/ScrollAnimation";

const QurbaniTips = () => {
  const Tips = [
    "Verify the age: Cattle must be at least 2 years old, and goats/sheep at least 1 year old.",
    "Perform a physical check: Ensure the animal is active, walking properly, and has no visible injuries.",
    "Check the teeth: Ensure the animal has the required number of permanent incisors (the 'teeth' rule).",
    "Pre-sacrifice care: Provide plenty of water but stop feeding solid food 12 hours before the sacrifice.",
    "Hygiene: Ensure proper waste disposal and clean the area immediately after the process.",
  ];
  return (
    <div className="max-w-5xl mx-auto px-6 pb-12 ">
      <h2 className="text-3xl font-bold mb-6 text-slate-800 text-center">
        Essential Qurbani <span className="text-orange-500 italic">Tips</span>
      </h2>
      <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {Tips.map((tip, index) => (
          <ScrollAnimation key={index}>
            <li className="flex gap-4">
              <span className="text-orange-600 font-black italic">
                {index + 1}.
              </span>
              <p className="text-slate-700 leading-relaxed font-medium">
                {tip}
              </p>
            </li>
          </ScrollAnimation>
        ))}
      </ul>
    </div>
  );
};

export default QurbaniTips;
