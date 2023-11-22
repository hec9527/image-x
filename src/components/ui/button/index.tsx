import classNames from 'classnames';
import React from 'react';
import './index.less';

interface ButtonProps {
    type?: 'primary' | 'ghost' | 'second' | 'text';
    size?: 'large' | 'middle' | 'small';
    disabled?: boolean;
    className?: string;
    onClick?: AnyFunction;
    children?: string;
}

const prefixCls = 'h-button';

const Button: React.FC<ButtonProps> = ({ children, type, className, size, onClick, disabled }) => {
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (disabled) return;
        onClick?.();
    };

    return (
        <button
            type='button'
            disabled={disabled}
            onClick={handleClick}
            className={classNames(
                prefixCls,
                className,
                `${prefixCls}-${type}`,
                `${prefixCls}-${size}`,
            )}
        >
            {children}
        </button>
    );
};

Button.displayName = 'Button';
Button.defaultProps = {
    type: 'primary',
    size: 'middle',
    disabled: false,
};

export default Button;
