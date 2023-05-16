import ItemHeader from "../components/ItemHeader";
import ItemRow from "../components/ItemRow";

const TableContainer = ({ items }) => {
  return (
    <div className="results">
      <table>
        <ItemHeader />
        <tbody>
          {items.map((item) => (
            <ItemRow key={item.id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableContainer;
