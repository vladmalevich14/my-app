import React from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();

    const [value, setValue] = React.useState('');
    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div>
            {t('Главная страница')}
            <Input value={value} onChange={onChange} placeholder="Введите текст" />
        </div>
    );
};

export default MainPage;
