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
      <label htmlFor="year" title="The first year of the Hunt was 1987">
        Year:
      </label>
      <input
        placeholder="You can leave this blank"
        onChange={onChange}
        type="text"
        name="year"
        id="year"
        value={year}
      />

      <label htmlFor="itemNumber" title="Many lists have 300+ items; few have over 350">
        Item Number:
      </label>
      <input
        type="text"
        name="itemNumber"
        id="itemNumber"
        value={itemNumber}
        placeholder="You can leave this blank"
        onChange={onChange}
      />
        
      <label htmlFor="itemText">
        Item Text:
      </label>
      <input
        type="text"
        name="itemText"
        id="itemText"
        value={itemText}
        placeholder="You can leave this blank"
        onChange={onChange}
      />
        
      <label htmlFor="points" title="Most items under 300 points, but can go significantly higher">
        Points:
      </label>
      <input
        type="text"
        name="points"
        id="points"
        value={points}
        placeholder="You can leave this blank"
        onChange={onChange}
      />
      
      <label htmlFor="rating" title="Like safe search, determines how risque search results can be. Caution includes rude or dirty results. NSFP is offensive.">
        Rating:
      </label>
      <select
        name="rating"
        id="rating"
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

      <input type="submit" value="Get the Items" className="button" />
    </form>
  );
};

export default Form;
