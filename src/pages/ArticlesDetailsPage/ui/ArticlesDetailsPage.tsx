import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ArticlesDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
  className?: string;
}

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            {t('ArticlesDetailsPage')}
        </div>
    );
};

export default memo(ArticlesDetailsPage);
