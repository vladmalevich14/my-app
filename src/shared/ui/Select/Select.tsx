import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, memo, useMemo,
} from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export const Select = memo(
    ({
        className, label, options, value, onChange, readOnly,
    }: SelectProps) => {
        const optionList = useMemo(
            () => options?.map((option) => (
                <option
                    className={cls.option}
                    value={option.value}
                    key={option.value}
                >
                    {option.content}
                </option>
            )),
            [options],
        );

        const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
            onChange?.(e.target.value);
        };

        const mods: Mods = {};
        return (
            <div className={classNames(cls.Wrapper, mods, [className])}>
                {label && <span className={cls.label}>{`${label} >`}</span>}
                <select
                    className={cls.select}
                    value={value}
                    onChange={onChangeHandler}
                    disabled={readOnly}
                >
                    {optionList}
                </select>
            </div>
        );
    },
);
