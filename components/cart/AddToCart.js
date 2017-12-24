import React from "react";
import { css } from "emotion";
import PropTypes from "prop-types";
import Button from "../../fusion/fusion/Button";

const AddToCart = props => {
	const { text, item } = props;
	return <Button onClick={() => alert(item)}>{text}</Button>;
};

AddToCart.defaultProps = {
	item: {},
	text: "ADD TO CART"
};

AddToCart.propTypes = {
	item: PropTypes.object.isRequired,
	text: PropTypes.string
};

export default AddToCart;
