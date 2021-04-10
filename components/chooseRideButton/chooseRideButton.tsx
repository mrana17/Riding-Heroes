import useLocalStorage from "../../hooks/useLocalStorage";
import styles from "./chooseRideButton.module.css";

export type ChooseRideButtonProps = {
  imgSrc: string;
  label: string;
  isActive: boolean;
  onSelectRide: (ride: string) => void;
};

function ChooseRideButton({
  imgSrc,
  label,
  isActive,
  onSelectRide,
}: ChooseRideButtonProps) {
  const [favoriteRide, setFavoriteRide] = useLocalStorage<string>(
    "favoriteRide",
    ""
  );

  const handleChooseRideClick = (selectedRide: string) => {
    setFavoriteRide(selectedRide);
    onSelectRide(selectedRide);
  };

  return (
    <button
      className={`${styles.chooseRideButton} ${
        isActive ? styles.chooseRideButtonActive : ""
      }`}
      onClick={() => handleChooseRideClick(label)}
    >
      <div className={styles.chooseRideContainer}>
        <img src={imgSrc} className={styles.chooseRideImg} />
      </div>
      <p>{label}</p>
    </button>
  );
}

export default ChooseRideButton;
