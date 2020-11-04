import "./App.css";

import NavHeader from "./MovieBooking/NavHeader";
import NowScreening from "./MovieBooking/NowScreening";
import Exclusive from "./MovieBooking/Exclusive";
import ComingSoon from "./MovieBooking/ComingSoon";
function App() {
  const headData = [
    "ShowTime",
    "Term Insurance",
    "Customer Service",
    "About Us",
  ];
  const nowData = ["Bombshell", "Darbar", "Hero", "chhapaak"];
  const comingData = [
    "Tanhaji-The Unsung Warrior",
    "Like a Boss",
    "Underwater",
    "Untouchable",
  ];
  const exl = ["Bunker", "countDown"];
  const title = ["Now Showing", "Coming Soon", "Exclusive"];
  return (
    <>
      <NavHeader data={headData} />
      <NowScreening title={title[0]} data={nowData} />
      <ComingSoon title={title[1]} data={comingData} />
      <Exclusive title={title[2]} data={exl} />
    </>
  );
}

export default App;
