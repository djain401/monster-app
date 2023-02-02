import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({monsters, searchValue})=> {

    return (
      <div className="card-list">
        {  monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchValue);
      }).map((monster) => {
          return <Card monster={monster} />;
        })}
       
      </div>
    );
  }

export default CardList;
