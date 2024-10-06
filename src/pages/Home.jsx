import Card from "../components/Card";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <>
      <div className={`  flex-1    bg-[#FFFD92] main px-56 `}>
        <Card
          className={`${styles.cardOne}`}
          url={
            "https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
        />
        <Card
          className={`${styles.cardTwo}`}
          url={
            "https://images.pexels.com/photos/2923156/pexels-photo-2923156.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
        />
        <Card
          className={`${styles.cardThree}`}
          url={
            "https://images.pexels.com/photos/1019771/pexels-photo-1019771.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
        />
        <Card
          className={`${styles.cardFour}`}
          url={
            "https://images.pexels.com/photos/783243/pexels-photo-783243.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
        />
        <div className="text   flex pt-60 font-semibold text-[#c31952] text-6xl justify-end">
          Search For an Idea
        </div>
        <p className="text-normal flex flex-col items-end text-2xl pr-12 text-[#c31952] pt-4 ">
          What do you want to try next? Think <br />
          of something you’re into—like “easy <br /> chicken dinner”—and see
          what you find. <br />
          <button className="text-lg bg-red-500 px-8 mr-44 mt-4 py-2 rounded-full text-white">
            Explore
          </button>
        </p>
      </div>
    </>
  );
};

export default Home;
