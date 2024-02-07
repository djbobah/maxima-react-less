import Layout from "../components/Layout";
import { useNavigate, useParams } from "react-router";
import { Ctx } from "../App";
import { useContext, useEffect } from "react";

export default () => {
  const { pokemons } = useContext(Ctx);
  const { name } = useParams();
  const navigate = useNavigate();
  const current = pokemons.filter((pk) => pk.text === name)[0];

  useEffect(() => {
    setTimeout(() => {
      navigate("/catalog");
    }, 2000);
  });

  return (
    <Layout name={name}>
      <img />
      {/* {current} */}
    </Layout>
  );
};
