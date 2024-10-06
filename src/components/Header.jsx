import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.nav_one}`}>
        <div className={styles.logo}>picstock</div>
        <div>Today</div>
        <div>Watch</div>
        <div>Explore</div>
      </div>
      <div className={`${styles.nav_two}`}>
        <div>About</div>
        <div>Business</div>
        <div>Blog</div>
        <button className="bg-red-500 text-white px-4 py-2 tracking-tighter rounded-full">
          Log In
        </button>
        <button className="bg-zinc-300 px-4 py-2 tracking-tighter rounded-full">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
