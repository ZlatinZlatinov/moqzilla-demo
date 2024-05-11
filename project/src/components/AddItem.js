import { useState } from 'react';

export default function AddItem({ addNewItem }) {
    const [inputValues, setInputValues] = useState({
        item: ''
    });

    function inputHandler(e) {
        const name = e.target.name;
        const value = e.target.value;

        setInputValues(state => ({
            ...state,
            [name]: value
        }));
    }

    function addFormHandler(e) {
        e.preventDefault();

        addNewItem({
            id: Math.floor(Math.random() * 100) + "-asdf-" + Math.floor(Math.random() * 100),
            value: inputValues.item
        });

        setInputValues({ item: '' });
    }

    return (
        <form className="add-item" onSubmit={addFormHandler}>
            <input
                type="text"
                name="item"
                id="item"
                value={inputValues.item}
                onChange={inputHandler}
                placeholder="Add item..." />
            <button type="submit" className="btn add-btn">+</button>
        </form>
    );
}