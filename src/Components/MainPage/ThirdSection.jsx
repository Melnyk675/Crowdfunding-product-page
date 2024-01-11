import { useGlobalContext } from "../../context/Context";
import Article from "./Article";

const ThirdSection = () => {

  const { pledgeLeftData: { bambooStand, blackEditionStand, mahoganySpecialEdition } } = useGlobalContext()

  return (
    <div>ThirdSection</div>
  )
}

export default ThirdSection;