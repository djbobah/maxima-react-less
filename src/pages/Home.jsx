import { useState } from "react";

import TextBlock from "../components/TextBlock/TextBlock";
import textContent from "../assets/data/text.json";
import Layout from "../components/Layout";
import SimpleCard from "../components/SimpleCard";
import FunBlock from "../components/FunBlock";

import pic1 from "../assets/images/pic1.png";
import pic2 from "../assets/images/pic2.png";
import Modal from "../components/Modal";

// https://habr.com/ru/articles/358090/

const counterSt = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
};

const App = () => {
  // props - статичный параметр - никогда не изменяется
  // state - состояние - динамически изменяющийся поараметр в React

  /* хук состояния 
        [сама изменяемая переменная, функция, которая будет изменять эту переменную] = useState(значение переменной, заданное по умолчанию)
    */
  const [n, changeN] = useState(10);
  const [openModal, setOpenModal] = useState(false);

  const clickMinus = () => {
    changeN(n - 1);
    console.log("minus", n);
  };
  const clickPlus = () => {
    changeN(n + 1);
    console.log("plus", n);
  };

  return (
    <>
      <header>
        <i
          className="fa fa-user-circle-o"
          style={{ fontSize: 24, color: "blueviolet", cursor: "pointer" }}
          onClick={(e) => setOpenModal(true)}
        />
      </header>
      <FunBlock />
      <Layout />
      <Layout>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quod.
        </h1>
      </Layout>
      <Layout name="Точно подойдет для:" count={2}>
        {textContent
          .filter((item) => item.block === "second")
          .map((item, i) => (
            <SimpleCard
              key={i}
              name={item.title}
              text={item.content}
              pic={i % 2 === 0 ? pic1 : pic2}
            />
          ))}
      </Layout>

      <Layout>
        <div style={counterSt}>
          <button onClick={clickMinus}>-</button>
          <span>{n}</span>
          <button onClick={(e) => clickPlus()}>+</button>
        </div>
      </Layout>
      <Layout name="Точно подойдет для:" size="300px">
        {textContent
          .filter((item) => item.block === "bottom")
          .map((item, i) => (
            <TextBlock
              key={i}
              name={item.title}
              text={item.content}
              variant="colorize"
              // color="#89ffad"
            />
          ))}
      </Layout>
      {/* {openModal && <Modal setOpenModal={setOpenModal}/>} */}
      {<Modal openModal={openModal} setOpenModal={setOpenModal} />}
    </>
  );
};

export default App;
