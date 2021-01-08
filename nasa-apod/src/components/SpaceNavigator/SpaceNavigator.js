import React from 'react';
import styles from './SpaceNavigator.scss';
import classNames from 'classnames/bind';
import { GoChevronLeft } from 'react-icons/go';
import { GoChevronRight } from 'react-icons/go';

const cx = classNames.bind(styles);

const SpaceNavigator = ({ onPrev, onNext }) => {
  return (
    <div className={cx('space-navigator')}>
      <div className={cx('left', 'end')}>
        <div className={cx('circle')} onClick={onPrev}>
          <GoChevronLeft />
        </div>
      </div>
      <div className={cx('right', 'end')}>
        <div className={cx('circle')} onClick={onNext}>
          <GoChevronRight />
        </div>
      </div>
    </div>
  );
};


export default SpaceNavigator;