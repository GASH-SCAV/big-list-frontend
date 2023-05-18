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
    .filter((item) => item != "")
    .join(".");
  return (
    <tr>
      <td className="bigDisplay">{itemNo}</td>
      <td className="bigDisplay">{originalItem}</td>
      <td className="bigDisplay">{comment}</td>
      <td className="mobileDisplay"><span className="bold">{itemNo}.</span> {originalItem}</td>
    </tr>
  );
};
export default ItemRow;
