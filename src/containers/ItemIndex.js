import { useState, useEffect } from "react";
import Form from "../components/Form";
import TableContainer from "./TableContainer.js";
import { getItems } from "../services/EthelAPI.js";
import filterItems from "../services/filterItems.js";

const ItemIndex = () => {
  useEffect(() => {
    getItems(formData).then((items) => {
      setItems(items);
      setFilteredItems(items);
    });
  }, []);
  const [formData, setFormData] = useState({
    year: "",
    itemNumber: "",
    itemText: "",
    points: "",
    rating: "Caution",
  });
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const hasItems = items.length > 0;
  const render = (
    <>
      <h1>Ethel</h1>
      <Form
        formData={formData}
        setFormData={setFormData}
        hasItems={hasItems}
        onSubmit={() => setFilteredItems(filterItems(formData, items))}
      />
      {hasItems && <TableContainer items={filteredItems} />}
    </>
  );

  return render;
};

export default ItemIndex;
