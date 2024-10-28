export default function UserInput({ onSelect, labels }) {
  return (
    <section id="user-input">
      <div className="input-group">
        {labels.map((label) => {
          return (
            <label key={label.name}>
              <h2>{label.title}</h2>
              <input
                min="0"
                defaultValue={label.value}
                onChange={onSelect}
                type="number"
                name={label.name}
              ></input>
            </label>
          );
        })}
      </div>
    </section>
  );
}
