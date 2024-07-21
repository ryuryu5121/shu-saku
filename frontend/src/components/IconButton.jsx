import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

// 画像のサイズを変更する
const Icon = styled('img')({
  width: 80,  // 画像の幅を設定
  height: 80, // 画像の高さを設定
  cursor: 'pointer', // クリックカーソルを設定
});

const IconButton = ({ imageUrl, onClick }) => {
  return (
    <div onClick={onClick} style={{ display: 'inline-block' }}>
      <Icon src={imageUrl} alt="icon" />
    </div>
  );
};

IconButton.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default IconButton;
