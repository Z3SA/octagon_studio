import React, { PureComponent } from 'react';

import styles from './ColorPicker.m.scss';
import { generateMixClass } from 'components/utils';

interface IColorPickerProps {
  colors: Array<{
    hex: string;
    needBorder?: boolean;
  }>;
  onChange?: any;
  active?: string;
}

interface IColorPickerState {
  activeColor: string;
}

/**
 * Color picker in modal "Settings"
 * @attr colors - array of colors in HEX
 * @attr onChange - callback on change of picked color
 * @attr active - picked color on init
 */
export default class ColorPicker extends PureComponent<
  IColorPickerProps,
  IColorPickerState
> {
  constructor(props) {
    super(props);

    this.state = {
      activeColor: this.props.active,
    };
  }

  changeColor = (color: string): void => {
    this.setState({
      activeColor: color,
    });

    if (this.props.onChange) {
      this.props.onChange(color);
    }
  }

  render() {
    const items = this.props.colors.map(item => (
      <ColorPickerItem
        key={item.hex}
        color={item.hex}
        needBorder={item.needBorder}
        active={item.hex === this.state.activeColor}
        onClick={e => {
          this.changeColor(e);
        }}
      />
    ));

    return <span className={styles.ColorPicker}>{items}</span>;
  }
}

interface IColorPickerItemProps {
  color: string;
  needBorder: boolean;
  active?: boolean;
  onClick?: any;
}

class ColorPickerItem extends PureComponent<IColorPickerItemProps> {
  static defaultProps: IColorPickerItemProps = {
    color: '#000',
    needBorder: false,
    active: false,
  };

  render() {
    const { color, needBorder, active } = this.props;
    const mixClass = generateMixClass([
      {
        name: styles.ColorPicker__item,
        isDefault: true,
      },
      {
        name: styles['ColorPicker__item--with-border'],
        condition: needBorder,
      },
      {
        name: styles['ColorPicker__item--active'],
        condition: active,
      },
    ]);

    return (
      <span
        className={mixClass}
        style={{ backgroundColor: color }}
        onClick={() => {
          this.props.onClick(color);
        }}
      />
    );
  }
}
