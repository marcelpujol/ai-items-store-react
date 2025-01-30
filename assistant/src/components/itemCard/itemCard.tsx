import React from "react";
import Icon from "../icon/icon";
import { useChat } from "ai/react";
import "./itemCard.scss";
import { Item } from "../../models/item";

type ItemCardProps = {
  chatId: string;
  item: Item;
};

const ItemCard: React.FC<ItemCardProps> = ({ chatId, item }) => {
  const { append } = useChat({
    api: "http://localhost:8080/api/chat",
    id: chatId,
    body: { id: chatId },
    maxSteps: 2,
  });

  const handleClick = async () => {
    await append({
      role: "user",
      content: `I want to update the item with name ${item.name}`,
    });
  };

  return (
    <div className="item-card-container" onClick={handleClick}>
      <Icon id={"itemCardIcon"} customClass="card-icon" icon={"inventory"} />
      <div className="item-card-content">
        <h2 className="item-card-name">{item.name || "N/A"}</h2>
        <p className="item-card-description">{item.description || "N/A"}</p>
        <div className="item-card-price">
          <span>{item.price || "N/A"}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
