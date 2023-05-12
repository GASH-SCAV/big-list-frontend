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
  return (
    <tr>
      <td>{year}</td>
      <td>{itemNumber + itemNumberAddendum + "." + specialEvent}</td>
      <td>{originalItem}</td>
      <td>{spellcheckedItem}</td>
      <td>{points}</td>
      <td>{comment}</td>
    </tr>
  );
};
export default ItemRow;
