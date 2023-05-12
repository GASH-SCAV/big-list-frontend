const ItemRow = ({
  year,
  itemNumber,
  itemNumberAddendum,
  originalItem,
  spellcheckedItem,
  specialEvent,
  points,
  pointValue,
  rating,
  comment,
}) => {
  const itemNo = [year, itemNumber, itemNumberAddendum, specialEvent]
    .filter((item) => item !== "")
    .join(".");
  return (
    <tr>
      <td>{itemNo}</td>
      <td>{originalItem}</td>
      {/* <td>{spellcheckedItem}</td> */}
      {/* <td>{points}</td> */}
      <td>{comment}</td>
    </tr>
  );
};
export default ItemRow;
