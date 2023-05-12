import { useState } from "react";
import Form from "../components/Form";
import TableContainer from "./TableContainer.js";
import { getItems } from "../services/EthelAPI.js";

const ItemIndex = () => {
  const [formData, setFormData] = useState({
    year: "",
    itemNumber: "",
    itemText: "",
    points: "",
    rating: "Caution",
  });
  const [items, setItems] = useState([]);
  const render = (
    <>
      <h1>Ethel</h1>
      <Form
        formData={formData}
        setFormData={setFormData}
        onSubmit={() => getItems(formData).then((items) => setItems(items))}
      />
      {items.length > 0 && <TableContainer items={items} />}
    </>
  );

  return render;
};

export default ItemIndex;
