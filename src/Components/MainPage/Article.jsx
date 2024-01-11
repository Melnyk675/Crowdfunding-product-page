import { useGlobalContext } from "../../context/Context";
import PropTypes from 'prop-types';

const Article = () => {

  const { setPldegeOpen } = useGlobalContext()

    const rewardButton = () => {
        setPldegeOpen(true)
        document.body.style.overflow = "hidden"
    }

  return (
    <div>Article</div>
  )
}

export default Article;