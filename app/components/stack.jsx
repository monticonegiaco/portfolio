import prueba from "../data/prueba.json";
export default function Stack() {
  return (
    <div>
      <div className="flex gap-2">
        {prueba.map((item) => (
          <div
            key={item.name}
            className=" items-center justify-center gap-2 border border-black/10 p-2"
          >
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
