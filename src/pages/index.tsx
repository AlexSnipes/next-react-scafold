import{ NextPage, GetStaticProps } from 'next'
import styles from '@/styles/home.module.css'
/**
 * Translations
 */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {useTranslation} from "react-i18next";

const Home: NextPage = () => {

    const { t } = useTranslation('common');

    return (
    <div className={styles.container}>
        {t("example-page")}
    </div>
  )
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
};

export default Home
