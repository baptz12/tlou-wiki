
function Food(){

    const food1 = "Pomme de terre";
    const food2 = "Frites du mcdo";

    return (
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food