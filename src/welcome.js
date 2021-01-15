import React from "react";
import "./App.css";

export const Random = () => {
    return (
        <>
            <div className="stock-container">Welcome to Stock Tracker</div>
        </>
    );
};


export const Random2 = ({ Data }) => {
    if (Data.Type === "TextBox")
        return (
            <tr>

                <td> {Data.Name} </td>

                <td> <input type="text" name={Data.Name}></input>

                </td>

            </tr>
        );
    if (Data.Type === "SecretTextBox")
        return (
            <tr>

                <td> {Data.Name} </td>

                <td> <input type="password" name={Data.Name}></input>

                </td>

            </tr>
        );
    if (Data.Type === "Dropdown") {
        return (
            <tr>

                <td> {Data.Name} </td>
                <td>
                    <select name={Data.Name} id={Data.Name} >
                        {Data.DropdownValues.map((data) => {
                            return (<option value={data.Value}>{data.DisplayName}</option>);
                        })}
                    </select>

                </td>

            </tr>
        );
    }
    if (Data.Type === "RadioButton") {
        return (
            <tr>

                <td> {Data.Name} </td>
                <td>
                    {Data.Options.map((data) => {
                        return (
                            <span>
                                <input type="radio" id={data.DisplayValue} name={Data.Name} value={data.DisplayValue}></input>
                                <label for={data.DisplayValue}>{data.DisplayValue}</label>
                            </span>
                        );
                    })}
                </td>

            </tr>
        );
    }
}