// import { useState } from "react";
// import UserForm from "../UserForm/UserForm";
// import TextInput from "../TextInput/TextInput";
// import LangSwitcher from "../LangSwitcher/LangSwitcher";
import OrderForm from "../OrderForm/OrderForm";
import css from "./App.module.css";

export default function App() {
  // const [lang, setLang] = useState("en");
  // const [inputValue, setInputValue] = useState("qwe");

  // const handleChangeLang = (newLang) => {
  //   setLang(newLang);
  // };

  // const handleChangeInputValue = (newValue) => {
  //   setInputValue(newValue);
  // };

  // const addNewUser = (newUser) => {
  //   console.log(newUser);
  // };

  const makeOrder = (newOrder) => {
    console.log(newOrder);
  };

  return (
    <div className={css.container}>
      <h1>Forms in React</h1>
      {/* <UserForm onAdd={addNewUser} /> */}

      {/* <TextInput text={inputValue} onType={handleChangeInputValue} />
      <p>Input value: {inputValue}</p> */}

      {/* <LangSwitcher lang={lang} onSelect={handleChangeLang} />
      <p>Current lang: {lang}</p> */}

      <OrderForm onOrder={makeOrder} />
    </div>
  );
}
