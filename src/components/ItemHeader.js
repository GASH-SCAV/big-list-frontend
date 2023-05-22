const ItemHeader = () => {
  return (
    <thead>
      <tr>
        <th className="bigDisplay" title="Year, number, and special event if applicable">Item Number</th>
        <th className="bigDisplay">Original Item</th>
        {/* <th>Spellchecked Item</th> */}
        {/* <th>Points</th> */}
        <th className="bigDisplay">Comment</th>
        <th className="mobileDisplay">Item</th>
      </tr>
    </thead>
  );
};
export default ItemHeader;
