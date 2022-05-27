import Card from "../Card";

export default function Set({ cards }) {
  return (
    <div className="card-grid">
      {cards.map((card) => {
        return <Card card={card} key={card.id}></Card>;
        
      })}
    </div>
  );
}
