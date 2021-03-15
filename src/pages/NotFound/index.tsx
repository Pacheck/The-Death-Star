import { Player } from "@lottiefiles/react-lottie-player";

const NotFound = () => {
  return (
    <>
      <h1>Não foi possível encontrar seu destino..</h1>
      <Player
        speed={1.5}
        autoplay={true}
        loop={true}
        controls={true}
        src="https://assets6.lottiefiles.com/packages/lf20_4DPcyu.json"
        style={{ height: "700px", width: "700px" }}
      />
    </>
  );
};

export default NotFound;
