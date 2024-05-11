import { useState } from 'react';

export default function SingleItem({ item, deleteItem }) {
    const [read, setReadOnly] = useState(true);
    const [countClicks, setCountClics] = useState(1);
    const [inputValues, setInputValues] = useState({
        item: item.value
    });

    function inputHandler(e) {
        const name = e.target.name;
        const value = e.target.value

        setInputValues(state => ({
            ...state,
            [name]: value
        }))
    }

    function editHandler() {
        if (countClicks < 2) {
            setCountClics(countClicks + 1);
        } else if (countClicks === 2) {
            setReadOnly(!read);
            setCountClics(1);
        }
    }

    return (
        <li>
            <input
                type="text"
                name="item"
                readOnly={read}
                onChange={inputHandler}
                onClick={editHandler}
                value={inputValues.item}
            />

            <button
                className="btn delete-btn"
                onClick={() => { deleteItem(item.id) }}>&#x2715;</button>
        </li>
    );
}