import { FaBeer } from "react-icons/fa";
import OfficerList from "../OfficerList/OfficerList";
import data from "../../officers.json";
import css from "./App.module.css";
import Button from "../Button/Button";

export default function App() {
  return (
    <div className={css.container}>
      <h1>Available officers</h1>

      <Button size="lg" variant="primary">
        Deposit
      </Button>
      <Button type="submit" variant="secondary">
        Register
      </Button>

      <FaBeer className={css.icon} size={40} />
      <OfficerList officers={data} />
    </div>
  );
}

// const ProfileSection = ({ title, children }) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       {children}
//     </section>
//   );
// };

//     <ProfileSection title="Рейтинг">
//         <div>Компонент рейтингу користувача</div>
//       </ProfileSection>

//       <ProfileSection title="Що це за очки досвіду та рівні?">
//         <p>Компонент списку поінтів</p>
//       </ProfileSection>

//       <ProfileSection title="Як отримати більше очків досвіду?">
//         <span>Компонент списку досвіду</span>
//       </ProfileSection>
