import PropTypes from "prop-types";

function List(props) {

    const itemList = props.items;
    const category = props.category;

    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //Alphabetical order
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); //ReverseAlphabetical order
    //fruits.sort((a,b) => a.calories - b.calories); //Numeric Ascending order
    //fruits.sort((a,b) => b.calories - a.calories); //Numeric Descending order

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    //const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.Id}> 
    //                                                          {lowCalFruit.name}: &nbsp;<b> {lowCalFruit.calories} calories </b> 
    //                                                  </li>);

    //const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.Id}> 
    //                                                          {highCalFruit.name}: &nbsp;<b>      {highCalFruit.calories} calories </b> 
    //                                                   </li>);


    const listItems = itemList.map(item => <li key={item.Id}>
                                                {item.name}: &nbsp;<b> {item.calories} calories </b>
                                            </li>);

    return (<>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol>
            </>);

}
List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({ Id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number })),
    category: PropTypes.string
}

List.defaultProps = {
    items: [],
    category: "Category"
}

export default List

