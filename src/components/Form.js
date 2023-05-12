const Form = ({ formData, setFormData, onSubmit, hasItems }) => {
  const { year, itemNumber, itemText, points, rating } = formData;
  const options = ["Safe", "Caution", "NSFP"];
  const onChange = (e) => {
    const newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <label>
        Year:
        <input
          placeholder="You can leave this blank"
          onChange={onChange}
          type="text"
          name="year"
          value={year}
        />
      </label>
      <label>
        Item Number:
        <input
          type="text"
          name="itemNumber"
          value={itemNumber}
          placeholder="You can leave this blank"
          onChange={onChange}
        />
      </label>
      <label>
        Item Text:
        <input
          type="text"
          name="itemText"
          value={itemText}
          placeholder="You can leave this blank"
          onChange={onChange}
        />
      </label>
      <label>
        Points:
        <input
          type="text"
          name="points"
          value={points}
          placeholder="You can leave this blank"
          onChange={onChange}
        />
      </label>
      <label>
        Rating:
        <select
          name="rating"
          value={rating}
          placeholder="You can leave this blank"
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Get the Items" />
    </form>
  );
};

export default Form;
