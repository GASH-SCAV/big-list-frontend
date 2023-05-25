import { useState } from "react";
import Form from "../components/Form";
import PartyModeToggle from "../components/PartyModeToggle";
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
  const [partyMode, setPartyMode] = useState(false);
  const [items, setItems] = useState([]);
  const hasItems = items.length > 0;
  const fetchItems = () => getItems(formData).then(setItems);
  const render = (
    <>
      <h1>The Item-Tum Tugger</h1>
      <marquee className="partyDisplayBlock">
        <h3>Is a curious app</h3>
      </marquee>
      <h3 className="partyHide">Is a curious app</h3>
      <PartyModeToggle partyMode={partyMode} setPartyMode={setPartyMode} />
      <Form
        formData={formData}
        setFormData={setFormData}
        hasItems={hasItems}
        onSubmit={fetchItems}
      />
      {hasItems && <TableContainer items={items} />}
    </>
  );

  return render;
};

export default ItemIndex;
