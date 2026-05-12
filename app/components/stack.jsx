import stack from "../data/stack.json";
export default function Stack() {
  return (
    <div className="p-6 pb-10">
      <div className="flex flex-wrap gap-2">
        {stack.map((s) => (
          <div
            key={s.name}
            className=" items-center justify-center gap-2 border-[1.5px] border-(--border-card) p-2"
          >
            <h3>{s.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
