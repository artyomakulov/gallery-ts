import { CommonClassProps } from "../types";
import cl from "classnames";
import css from "./Navigation.module.scss";

interface NavigationProps extends CommonClassProps {
  disabledPRev: boolean;
  disabledNext: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  disabledPRev,
  disabledNext,
  onPrevClick,
  onNextClick,
  className,
}) => {
  return (
    <div className={(cl(className, css.navigation))}>
      <button
        disabled={disabledPRev}
        className={cl(css.navigationBtn, css.navigationBtnLeft)}
        onClick={onPrevClick}
      ></button>
      <button
        disabled={disabledNext}
        className={cl(css.navigationBtn, css.navigationBtnRight)}
        onClick={onNextClick}
      ></button>
    </div>
  );
};

export default Navigation;
