import React from 'react';
import styles from "./ShoppingCart.module.css";
import styles2 from "./ShoppingCart.module.scss";
import { FiShoppingCart } from "react-icons/fi";

interface Props {

}

interface State {
  isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if ((event.target as HTMLElement).nodeName === 'SPAN') {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }

  render() {
    return (
      <div className={styles.cartContainer}>
        <button
          className={`${styles2.button} ${styles2.ddd}`}
          onClick={this.handleClick}
        >
          <FiShoppingCart />
          <span>Shopping-cart 2 (items)</span>
        </button>
        <div
          className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? 'block' : 'none'
          }}
        >
          <ul>
            <li>robot 1</li>
            <li>robot 2</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ShoppingCart;
